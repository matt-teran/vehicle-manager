const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/add-car', adminController.postAddCar);

module.exports = router;