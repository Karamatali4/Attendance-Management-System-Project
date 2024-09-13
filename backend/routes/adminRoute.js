
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const getAllUsers = require("../controllers/adminController");


const router = express.Router();



router.route("/users").get(authMiddleware,adminMiddleware,getAllUsers);


module.exports = router;

