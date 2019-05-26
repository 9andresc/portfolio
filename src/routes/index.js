// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = [
  {
    path: '/',
    component: path.resolve(`src/routes/home/index.tsx`),
  },
  {
    path: '/404/',
    component: path.resolve(`src/routes/not-found/index.tsx`),
  },
];
