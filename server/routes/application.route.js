import express from 'express'
import {createApplication, getApplications} from "../controllers/application.controller.js";

const applicationRouter = express.Router()

applicationRouter.post('/:jobId', createApplication);

applicationRouter.get('/', getApplications)

export default applicationRouter;