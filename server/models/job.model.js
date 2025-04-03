import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    location: String,
    isRemote: {
        type: Boolean,
        default: false,
    },
    salary: {
        type: String,
        default: 'Negotiable',
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // employer
        required: true,
    },
    applicants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // jobSeeker
        }
    ]
}, {timestamps: true});

const Job = mongoose.model('Job', JobSchema);

export default Job;