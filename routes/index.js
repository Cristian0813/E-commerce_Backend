const express = require('express');
const router = express.Router();
const apiRouter = require('../models/server');

router.use('/', apiRouter);

module.exports = router;