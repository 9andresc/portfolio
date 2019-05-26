module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'git add'],
  '*.css': ['stylelint --fix', 'git add'],
  '*.{ts,tsx,json}': ['prettier --write', 'git add'],
};
