import express from 'express';
import {getAllJobs, getJob} from "../controllers/job.controller.js";

const jobRouter = express.Router();

jobRouter.get('/', getAllJobs);

jobRouter.get('/:id', getJob)

jobRouter.post('/', async (req, res) => {
    res.send('Create new job')
})

jobRouter.put('/:id', async (req, res) => {
    res.send('Update job')
})

jobRouter.delete('/:id', async (req, res) => {
    res.send('Delete job')
})

export default jobRouter