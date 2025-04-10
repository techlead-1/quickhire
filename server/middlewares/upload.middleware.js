import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js'; // Cloudinary config file

// Resume upload config
const resumeStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'resumes',
        allowed_formats: ['pdf'],
        resource_type: 'raw'
    },
});

// Logo upload config
const logoStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'logos',
        allowed_formats: ['jpg', 'jpeg', 'png'],
    },
});

export const uploadResume = multer({ storage: resumeStorage });
export const uploadLogo = multer({ storage: logoStorage });