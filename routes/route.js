const express = require("express");
const {loginUser, registerUser} = require("../controllers/Auth_Controller");
const router = express.Router();

//-------ROUTING-----------
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;