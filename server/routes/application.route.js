import express from 'express'

const applicationRouter = express.Router()

applicationRouter.post('/:jobId', async (req, res) => {
    res.send('Apply to job')
})

applicationRouter.get('/job/:jobId', async (req, res) => {
    res.send('Get job applicants')
})

applicationRouter.get('/my-applications', async (req, res) => {
    res.send('Get job user has applied too')
})

export default applicationRouter;