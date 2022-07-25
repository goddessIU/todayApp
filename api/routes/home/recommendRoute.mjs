import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.end('hello this is recommend')
})

export default router;