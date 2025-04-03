import express from 'express';

const authRouter = express.Router();

authRouter.post('sign-up', async (req, res) => {
    res.send('Sign up');
})

authRouter.post('sign-in', async (req, res) => {
    res.send('Sign in');
})

authRouter.delete('sign-out', async (req, res) => {
    res.send('Sign out');
})

export default authRouter;