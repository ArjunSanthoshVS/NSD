const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

/* GET users listing. */
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/otpVerify', userController.otpVerify);
router.get('/googleLogin', userController.googleLogin);
router.post('/payment', userController.payment);
router.post('/emailOTP', userController.emailOTP);
router.post('/verifyEmailOtp', userController.verifyEmailOtp);

module.exports = router;
