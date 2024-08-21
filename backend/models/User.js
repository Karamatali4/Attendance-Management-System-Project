const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: '', // URL to the profile picture, can be empty initially
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Either 'user' or 'admin'
    default: 'user',
  },
  gender: {
    type: String,
    enum: ['male', 'female'], // Only allow 'male' or 'female'
    required: true, // Gender is required
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Pre-save middleware to hash the password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to generate JWT
userSchema.methods.generateToken = function() {
  return jwt.sign(
    { userId: this._id, email: this.email, role: this.role },
    process.env.MYSECRETKEY, 
    { expiresIn: '30d' }
  );
};

const User = mongoose.model('User', userSchema);

module.exports = User;
