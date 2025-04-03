import express from 'express';
import {PORT} from "./config/env.js";

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(PORT, (req, res) => {
    console.log(`Server started on port: ${PORT}`);
})

export default app;