const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/add-car', adminController.postAddCar);
router.get('/get-cars', adminController.getCars);

module.exports = router;