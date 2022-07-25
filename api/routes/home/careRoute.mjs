import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    const resa = [
        'a',
        'b'
    ]
    res.end(JSON.stringify(resa))
})

export default router;