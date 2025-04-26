import { readXP, writeXP } from '../xpData.js';

export const getXP = (_, res) => {
  res.json(readXP());
};

export const postXP = (req, res) => {
  const { xp = 0, badge, quiz } = req.body;
  const data = readXP();
  data.xp += xp;
  if (badge && !data.badges.includes(badge)) data.badges.push(badge);
  if (quiz && !data.quizzesTaken.includes(quiz)) data.quizzesTaken.push(quiz);
  writeXP(data);
  res.json(data);
};