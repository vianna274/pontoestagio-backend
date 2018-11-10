const express = require('express');
const router = express.Router();

const userRouter = () => {
  router.get('/', (req, res, next) => {
    res.send('Getting /user');
  });
}