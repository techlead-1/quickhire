import Job from "../models/job.model.js";
import Application from "../models/application.model.js";

export const getAllJobs = async (req, res, next) => {
    try {
        let jobs;
        if (req.user.role === 'job-seeker') {
            jobs = await Job.find().sort({createdAt: -1});
        }

        if (req.user.role === 'employer') {
            jobs = await Job.find({createdBy: req.user._id}).sort({createdAt: -1});
        }

        res.status(200).json({
            status: 'success',
            message: 'Get job list',
            data: {
                jobs: jobs,
            }
        });
    } catch (e) {
        next(e);
    }
}

export const getJob = async (req, res, next) => {
    try {
        let job = await Job.findById(req.params.id)
            .populate({
                path: 'createdBy',
                select: 'name companyName companyWebsite imageUrl _id'
            })
            .populate({
                path: 'applicants'
            });

        if (!job) {
            let error = new Error('Job not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            status: 'success',
            message: 'Get specific job',
            data: {
                job: job
            }
        })
    } catch (e) {
        next(e);
    }
}

export const createJob = async (req, res, next) => {
    try {
        const allowedFields = ['title', 'description', 'location', 'isRemote', 'salary'];

        let jobData = {createdBy: req.user._id};
        for (let field of allowedFields) {
            if (req.body[field] !== undefined) {
                jobData[field] = req.body[field];
            }
        }

        if (!jobData.title) {
            let error = new Error('Title is required');
            error.statusCode = 400;
            throw error;
        }

        let job = await Job.create(jobData)
        res.status(201).json({
            status: 'success',
            message: 'Created job',
            data: {
                job: job
            }
        })
    } catch (e) {
        next(e);
    }
}

export const updateJob = async (req, res, next) => {
    try {
        let job = await Job.findById(req.params.id)
        if (!job) {
            let error = new Error('Job not found');
            error.statusCode = 404;
            throw error;
        }

        if (job.createdBy.toString() !== req.user._id.toString()) {
            let error = new Error('Not authorized to update this job')
            error.statusCode = 403;
            throw error;
        }

        const allowedFields = ['title', 'description', 'location', 'isRemote', 'salary'];

        let jobData = {};
        for (let field of allowedFields) {
            if (req.body[field] !== undefined) {
                jobData[field] = req.body[field];
            }
        }

        Object.assign(job, jobData)
        await job.save()

        res.status(200).json({
            status: 'success',
            message: 'Updated job',
            data: {
                job: job
            }
        })
    } catch (e) {
        next(e);
    }
}

export const deleteJob = async (req, res, next) => {
    try {
        let job = await Job.findById(req.params.id)
        if (!job) {
            let error = new Error('Job not found');
            error.statusCode = 404;
            throw error;
        }

        if (job.createdBy.toString() !== req.user._id.toString()) {
            let error = new Error('Not authorized to update this job')
            error.statusCode = 403;
            throw error;
        }

        await Application.deleteMany({ jobId: req.params.id })
        await job.deleteOne()

        res.status(200).json({
            status: 'success',
            message: 'Deleted job',
        })
    } catch (e) {
        next(e);
    }
}