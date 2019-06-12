const jwt = require('jsonwebtoken');
require('custom-env').env();

//Middleware for verifying jwt

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader)
        return res.status(401).send({error: 'no token provided'});

    const parts = authHeader.split(' ');

    if(!parts.length === 2 )
        return res.status(401).send({error: 'token error'});

    const [scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: 'token malformatted'});

    jwt.verify(token, process.env.SECRET_KEY, (err, decode)=>{
        if(err) return res.status(401).send({error:"Token invalid"});

        req.userId = decode.id;
        return next();
    });
};