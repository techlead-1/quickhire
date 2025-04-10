import { config } from 'dotenv';

config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});

export const {
    NODE_ENV,
    PORT,
    DB_URI,
    JWT_SECRET,
    EXPIRES_IN,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    ARCJET_KEY ,
    ARCJET_ENV,
    CORS_ORIGIN
} = process.env;