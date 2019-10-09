module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'git add'],
  '*.{ts,tsx,json}': ['prettier --write', 'git add'],
};
