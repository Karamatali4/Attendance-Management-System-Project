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

    // Debugging secret key
    console.log("MYSECRETKEY: ", process.env.MYSECRETKEY);
    
    // Verifying token
    const isVerified = jwt.verify(jwtToken, process.env.MYSECRETKEY);
    
    // Find user without password
    const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });
    
    if (!userData) {
      return res.status(404).json({ mes: "User not found" });
    }

    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    
    next();
  } catch (error) {
    console.error("Token Verification error: ", error.message);
    
    // Send a response on error
    return res.status(401).json({ mes: "Invalid token" });
  }
}

module.exports = authMiddleware;
