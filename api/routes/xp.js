import express from 'express';
const router = express.Router();

const degrees = [{ id: 1, name: 'Computer Science', xp: 100 }];
router.get('/', (req, res) => res.json(degrees));

export default router;
