import express from 'express';
import cors from 'cors';
import xpRoute from './api/routes/xp.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_, res) => res.json({ ok: true }));
app.use('/api/xp', xpRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('XP API running on port ' + PORT));