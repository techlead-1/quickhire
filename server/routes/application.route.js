import express from 'express'
import {createApplication} from "../controllers/application.controller.js";

const applicationRouter = express.Router()

applicationRouter.post('/:jobId', createApplication);

applicationRouter.get('/job/:jobId', async (req, res) => {
    res.send('Get job applicants')
})

applicationRouter.get('/my-applications', async (req, res) => {
    res.send('Get job user has applied too')
})

export default applicationRouter;