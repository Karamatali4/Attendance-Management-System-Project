const express = require("express");
const authControllers = require("../controllers/authController");
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Set file name
  }
});

const upload = multer({ storage: storage });

// Register route
router.post("/register", upload.single('profilePic'), authControllers.register); // POST method

// Login route
router.post("/login", authControllers.login); // POST method

module.exports = router;
