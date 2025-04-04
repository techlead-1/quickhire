import Job from "../models/job.model.js";

export const getAllJobs = async (req, res, next) => {
    try {
        let jobs;
        if (req.user.role === 'jobseeker') {
            jobs = await Job.find().sort({createdAt: -1});
        }

        if (req.user.role === 'job') {
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
        const allowedFields = ['title', 'description', 'location', 'isRemote', 'salary', 'applicants'];

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