import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['job-seeker', 'employer'],
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    // Shared fields
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    location: {
        type: String,
        trim: true,
        default: '',
    },

    // JobSeeker fields
    bio: {
        type: String,
        trim: true,
        default: '',
    },
    skills: {
        type: String,
        trim: true,
        default: '',
    },
    resumeUrl: {
        type: String,
        trim: true,
        default: '',
    },

    // Employer fields
    companyName: {
        type: String,
        trim: true,
        default: '',
    },
    companyWebsite: {
        type: String,
        trim: true,
        default: '',
    },
    imageUrl: {
        type: String,
        trim: true,
        default: '',
    },
    companyDescription: {
        type: String,
        trim: true,
        default: '',
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User