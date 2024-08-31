const User = require("../models/User");
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mes: "Unauthorized HTTP, Token not provided" });
  }

  try {
    const jwtToken = token.replace("Bearer", "").trim();
    console.log("Token from auth middleware", jwtToken);

    
    
    // Verifying token
    const isVerified = jwt.verify(jwtToken, process.env.MYSECRETKEY);
    
    // Find user without password
    const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });
    
    const userResponse = {
      ...userData.toObject(),
      profilePicUrl: userData.profilePic ? `${req.protocol}://${req.get('host')}/uploads/${userData.profilePic}` : ''
    };
    if (!userData) {
      return res.status(404).json({ msg: "User not found" });
    }

     

    console.log("middleware ",userData)
    // req.pic= userResponsepic;
    req.user = userResponse;
    req.token = token;
    req.userID = userData._id;
    
    next();
  } catch (error) {
    console.error("Token Verification error: ", error.message);
    
    // Send a response on error
    return res.status(401).json({ msg: "Invalid token" });
  }
}

module.exports = authMiddleware;
