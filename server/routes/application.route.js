import express from 'express'
import {createApplication, getApplications} from "../controllers/application.controller.js";

const applicationRouter = express.Router()

applicationRouter.post('/:jobId', createApplication);

applicationRouter.get('/job/:jobId', getApplications)

export default applicationRouter;