import express from 'express';
import {getAllJobs} from "../controllers/job.controller.js";

const jobRouter = express.Router();

jobRouter.get('/', getAllJobs);

jobRouter.get('/:id', async (req, res) => {
    res.send('Get job')
})

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