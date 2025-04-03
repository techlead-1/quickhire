import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(5500, (req, res) => {
    console.log('Listening on 5500')
})

export default app;