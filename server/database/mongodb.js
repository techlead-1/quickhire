import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
    throw new Error('Failed to connect to mongodb because DB_URI is missing');
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);

        console.log(`MongoDB Connected successfully in ${NODE_ENV}`);
    } catch (error) {
        console.log(`Unable to connect to MongoDB: ${error}`);

        process.exit(1);
    }
}

export default connectToDatabase;