import express from 'express'
import {
    createApplication,
    getApplications,
    deleteApplication,
    getApplication
} from "../controllers/application.controller.js";

const applicationRouter = express.Router()

applicationRouter.post('/:jobId', createApplication);

applicationRouter.get('/', getApplications)

applicationRouter.get('/:id', getApplication);

applicationRouter.delete('/:id', deleteApplication)

export default applicationRouter;