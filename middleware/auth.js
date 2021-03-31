const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    const token = req.header('x-auth');

    if(!token){
        return res.status(401).json({msg:'Not authorized'});
    }

    try{
        jwt.verify(token,
            config.get('jwtSecret'),
            (error,decoded) => {
                if(error){
                    return res.status(401).json({msg:"Token not valid"});
                }
                else{
                    req.user = decoded.user;
                    next();
                }
            });
    }
    catch(err){
        console.error('something wrong with auth middleware');
        res.status(500).json({msg:"Server Error.."})
    }
}