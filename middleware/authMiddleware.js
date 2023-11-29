export const verifyToken = async (req,res,next) => {
    const {authorization} = req.headers;
    if(authorization) {
        const token = authorization.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
            if (err) {
                res.status(401).json({message: 'Invalid token'});
            } else {
                req.email = payload.email;
                req.role = payload.role;
                next();
            }
        })
    }else{
        res.status(401).json({message: 'Token required'});
    }
}