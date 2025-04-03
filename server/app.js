import express from 'express';
import {PORT, NODE_ENV} from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(PORT, async (req, res) => {
    console.log(`${NODE_ENV} server is running on port: ${PORT}`);
    await connectToDatabase();

    console.log('Connected to database');
})

export default app;