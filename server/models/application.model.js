import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    applicantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    employerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    message: String,
    resumeUrl: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['applied', 'viewed', 'rejected'],
        default: 'applied',
    }
}, {timestamps: true});

const Application = mongoose.model('Application', applicationSchema);

export default Application;