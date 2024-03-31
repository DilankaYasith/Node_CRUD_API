const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();
const {getProducts,getProduct} = require('../controllers/product.controller');
const { get } = require('mongoose');

router.get('/', getProducts);

router.get('/:id', getProduct);

module.exports = router;