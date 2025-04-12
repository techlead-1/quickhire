import express from 'express'
import {createApplication, getApplications, deleteApplication} from "../controllers/application.controller.js";

const applicationRouter = express.Router()

applicationRouter.post('/:jobId', createApplication);

applicationRouter.get('/', getApplications)

applicationRouter.delete('/:id', deleteApplication)

export default applicationRouter;