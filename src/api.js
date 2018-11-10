const express = require('express');
const router = express.Router();
const userRouter = require('./user')();

const apiRouter = () => {

  router.get('/', (req, res, next) => {
    res.send('Getting /');
  });

  router.use('user', userRouter);
  return router;
}

module.exports = apiRouter;