import express from 'express';

const jobRouter = express.Router();

jobRouter.get('/', async (req, res) => {
    res.send('Get all jobs')
})

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