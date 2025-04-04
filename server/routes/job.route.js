import express from 'express';
import {createJob, getAllJobs, getJob} from "../controllers/job.controller.js";

const jobRouter = express.Router();

jobRouter.get('/', getAllJobs);

jobRouter.get('/:id', getJob)

jobRouter.post('/', createJob);

jobRouter.put('/:id', async (req, res) => {
    res.send('Update job')
})

jobRouter.delete('/:id', async (req, res) => {
    res.send('Delete job')
})

export default jobRouter