import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['jobSeeker', 'employer'],
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
    location: String,

    // JobSeeker fields
    bio: String,
    skills: [String],
    resumeUrl: String,

    // Employer fields
    companyName: String,
    companyWebsite: String,
    logoUrl: String,
    companyDescription: String,
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User