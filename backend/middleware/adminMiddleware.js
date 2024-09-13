

const adminMiddleware = (req,res,next) => {

    try {
        
        const adminRoll = req.user.role;

        if(adminRoll=="user"){
          return  res.status(403).json({message:"Access denied! user is not a admin"});
        }

        // if user is an  admin then proceed to next middleware
        next();

    } catch (error) {
        
        console.log(error);
        next(error);
    }
}


module.exports = adminMiddleware;