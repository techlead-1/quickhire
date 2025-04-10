import express from 'express';
import {PORT, NODE_ENV, CORS_ORIGIN} from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import jobRouter from "./routes/job.route.js";
import applicationRouter from "./routes/application.route.js";
import authMiddleware from "./middlewares/auth.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";

const app = express();

app.use(
    cors({
        origin: CORS_ORIGIN,
        credentials: true,
    })
)

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', authMiddleware, userRouter)
app.use('/api/v1/jobs', authMiddleware, jobRouter)
app.use('/api/v1/applications', authMiddleware, applicationRouter)

app.use(arcjetMiddleware)
app.use(errorMiddleware);

app.listen(PORT, async (req, res) => {
    console.log(`${NODE_ENV} server is running on port: ${PORT}`);
    await connectToDatabase();

    console.log('Connected to database');
})

export default app;