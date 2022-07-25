import express from 'express';
import careRoute from './home/careRoute.mjs';
import hotRoute from './home/hotRoute.mjs';
import recommendRoute from './home/recommendRoute.mjs';


const router = express.Router();

router.use('/care', careRoute);
router.use('/hot', hotRoute);
router.use('/recommend', recommendRoute);

export default router;