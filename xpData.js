export let xpStore = { xp: 0, badges: [], quizzesTaken: [] };

export function readXP() {
  return xpStore;
}

export function writeXP(data) {
  xpStore = data;
}