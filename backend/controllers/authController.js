const User = require("../models/User");
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: 'uploads/', // Set upload directory
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Set file name
  }
});

const upload = multer({ storage });

// Register Controller
const register = async (req, res, next) => {
  try {
    const { username, email, password, gender } = req.body;
    const profilePic = req.file ? req.file.filename : '';

    // Check if email already exists
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create and save new user
    const newUser = await new User({ username, email, password, profilePic, gender }).save();

    // Generate JWT token
    const token = await newUser.generateToken();
    
    res.status(201).json({ user: newUser, token, userId: newUser._id.toString() });
  } catch (error) {
    next(error);
  }
};

// Login Controller
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    // Generate JWT token
    const token = await user.generateToken();
    res.status(200).json({ msg: "Login Successful", token, userId: user._id.toString() });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
