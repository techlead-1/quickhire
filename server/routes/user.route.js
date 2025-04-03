import express from 'express'

const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.render('Get user information')
})

userRouter.put('/', (req, res) => {
    res.render('Update user information')
})

userRouter.post('/resume', (req, res) => {
    res.render('Upload resume')
})

userRouter.post('/logo', (req, res) => {
    res.render('Upload logo')
})

export default userRouter