import express from 'express';
import {PORT, NODE_ENV} from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(PORT, async (req, res) => {
    console.log(`${NODE_ENV} server is running on port: ${PORT}`);
    await connectToDatabase();

    console.log('Connected to database');
})

export default app;