import mongoose from "mongoose";
import Application from "../models/application.model.js";
import Job from "../models/job.model.js";

export const createApplication = async (req, res, next) => {
    const session = await mongoose.startSession()
    await session.startTransaction()

    try {
        let job = await Job.findById(req.params.jobId)
        if (!job) {
            let error = new Error('Job not found')
            error.statusCode = 404
            throw error
        }

        if (job.applicants.includes(req.user._id)) {
            let error = new Error('Already applied to this job')
            error.statusCode = 400
            throw error
        }

        const { message } = req.body;

        const [application] = await Application.create([{
            jobId: req.params.jobId,
            applicantId: req.user._id,
            message,
            resumeUrl: req.user.resumeUrl
        }], {session})

        job.applicants.push(req.user._id)
        await job.save({session})

        await session.commitTransaction()
        await session.endSession()

        res.status(201).send({
            success: true,
            message: 'Application created successfully.',
            data: {
                application,
            }
        })

    } catch (e) {
        if (await session.inTransaction()) {
            await session.abortTransaction()
            await session.endSession()
        }
        next(e)
    }
}