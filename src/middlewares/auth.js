const jwt = require('jsonwebtoken');
module.exports = (req, res, next) =>{
    const token = req.headers['authorization'];
    if(!token) return res.status(401).send('Accss Denied');
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid Token');
    }
}
