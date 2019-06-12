require('custom-env').env();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const generateToken = (param = {}) => {
    return jwt.sign(param, process.env.SECRET_KEY,{
        expiresIn:86400,
    } );
};

module.exports = {
     async register (req, res) {

        const { email } = req.body;
    
        try {
            if(await User.findOne({ email }))
                res.status(400).send({error:'user already exists'});
    
            const user = await User.create(req.body);
    
            user.password = undefined;
    
            return res.send({ 
                user,
                token:generateToken({id:user.id}),
             });
            
        } catch(err){
            return res.status(400).send({error: 'failed registration'});
        }
    },
    
     async login (req, res) {
    
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');
    
        if(!user)
            return res.status(400).send({error:'user not found'});
    
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({error:'invalid password'});
    
        user.password = undefined;
    
        res.send({
            user,
            token:generateToken({id:user.id}),
            });
    },
};