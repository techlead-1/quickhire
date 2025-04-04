import Job from "../models/job.model.js";

export const getAllJobs = async (req, res, next) => {
    try {
        let jobs;
        if (req.user.role === 'jobseeker') {
            jobs = await Job.find().sort({createdAt: -1});
        }

        if (req.user.role === 'job') {
            jobs = await Job.findById(req.user._id).sort({createdAt: -1});
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