// const admin = require('../model/admin');

const Admin= require('../model/Admin');

const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
// const Joi = require('@hapi/joi');

exports.addAdmin= async(req,res,next)=>{
   
        
    
        //Check if email already on Database
    
        const emailExist = await Admin.findOne({email:req.body.email});
        if(emailExist) return res.status(400).send('Email already exist');
    
        //User password hashing
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(req.body.password, salt);
        
       //Create new admin
    
       const admin = new Admin({
        adminName: req.body.adminName,
        email: req.body.email,    
        password:hashedPassword
    });
        try {
            const savedAdmin = await admin.save();
            // console.log(savedUser);
    
            res.send(savedAdmin);
            next();
            
        } catch (error) {
            res.status(400).send(error);
        }
}
        exports.login = async(req,res,next) =>
        {
            //User Validation before login
            
            // const schema = Joi.object({ 
            //     email: Joi.string().min(6).required(),
            //     password: Joi.string().min(6).required()
            // });
            
            //const {error} = schema.validate(req.body);
            
            //if (error) return res.status(400).send(error.details[0].message);
            
             //Check if email is on Database
            
             const admin = await Admin.findOne({email:req.body.email});
             if(!admin) return res.status(400).send('There is no Account with this Email');
             
             //Password Validation
             const validPass = await bcrypt.compare(req.body.password, admin.password);
             if(!validPass) return res.status(400).send('Invalid password');
            
             //Create and assign jwt tokken
            //  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
            //  res.header('auth-token',token).send(token);
            res.send(admin);
            // res.status(200).send("user logged in");
             next();
            
        }    
 

