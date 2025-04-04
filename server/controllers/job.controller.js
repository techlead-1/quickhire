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