import mongoose from "mongoose";
import Application from "../models/application.model.js";
import Job from "../models/job.model.js";

export const createApplication = async (req, res, next) => {
    const session = await mongoose.startSession()
    await session.startTransaction()

    try {
        let job = await Job.findById(req.params.jobId)
            .populate({
                path: 'createdBy',
                select: 'name companyName companyWebsite imageUrl _id'
            })
            .populate({
                path: 'applicants'
            });

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
            employerId: job.createdBy,
            message,
            resumeUrl: req.user.resumeUrl
        }], {session})

        job.applicants.push(req.user._id)
        await job.save({session})

        await session.commitTransaction()
        await session.endSession()

        await job.populate({
            path: 'applicants',
            select: '_id name resumeUrl description'
        });

        res.status(201).json({
            success: true,
            message: 'Application created successfully.',
            data: {
                job
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

export const getApplications = async (req, res, next) => {
    try {
        let applications;
        if (req.user.role === 'job-seeker') {
            applications = await Application.find({applicantId: req.user._id}).sort({createdAt: -1})
                .populate('jobId')
                .populate('applicantId')
                .populate('employerId')
        }

        if (req.user.role === 'employer') {
            applications = await Application.find({employerId: req.user._id}).sort({createdAt: -1})
                .populate('jobId')
                .populate('applicantId')
                .populate('employerId')
        }

        res.status(200).json({
            success: true,
            message: 'Fetched applications successfully.',
            data: {
                applications,
            }
        })
    } catch (e) {
        next(e)
    }
}

export const getApplication = async (req, res, next) => {
    try {
        const application = await Application.findById(req.params.id)
            .populate('jobId')
            .populate('applicantId')
            .populate('employerId')

        res.status(200).json({
            success: true,
            message: 'Fetched application successfully.',
            data: {
                application,
            }
        })
    } catch (e) {
        next(e)
    }
}

export const deleteApplication = async (req, res, next) => {
    try {
        const application = await Application.findOne({_id: req.params.id, applicantId: req.user._id}).populate('jobId')
        if (!application) {
            let error = new Error('Application not found')
            error.statusCode = 404
            throw error
        }


        let job = await Job.findById(application.jobId).populate('applicants')
        if (job) {
            job.applicants.pull(req.user._id)
            await job.save()
        }
        await application.deleteOne()

        res.status(200).json({
            success: true,
            message: 'Application deleted successfully.',
        })
    } catch (e) {
        next(e)
    }
}