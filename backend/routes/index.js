const express = require ('express');
const router = express.Router();

const productRoute = require ('../models/product');
const descriptionRotue = require ('../models/description');

router.use('/producto', productRoute);
router.use('/descripcion', descriptionRotue);

module.exports = router;
