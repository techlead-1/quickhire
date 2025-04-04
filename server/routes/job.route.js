import express from 'express';
import {createJob, getAllJobs, getJob, updateJob} from "../controllers/job.controller.js";

const jobRouter = express.Router();

jobRouter.get('/', getAllJobs);

jobRouter.get('/:id', getJob)

jobRouter.post('/', createJob);

jobRouter.put('/:id', updateJob)

jobRouter.delete('/:id', async (req, res) => {
    res.send('Delete job')
})

export default jobRouter