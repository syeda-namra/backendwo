const router = require('express').Router();
const userProfile = require('../model/userProfile');
const User=require('../model/User')


const { Router } = require('express');
const AuthController = require("../controllers/AuthController");
const UserprofileController=require("../controllers/UserprofileController");

//const registerValidation = require('../validation');

router.put('/:id/edituser',UserprofileController.edituser);
router.get('/getallusers',UserprofileController.getallusers);
router.get('/:id/getoneuser',UserprofileController.singleuseget);
router.post('/adduser',UserprofileController.addnewuser);
router.delete('/:id/deleteuser',UserprofileController.userDelete);
//***********************************Company routes start**********************/    
//register new user
router.post('/register',AuthController.register);

//login
router.post('/login',AuthController.login);

//delete user from db//
router.delete('/delete/:id',AuthController.delete);


//update user info//

router.put('/edit/:id',AuthController.edit);

//get one userinfo//
router.get('/userGet/:id',AuthController.userGet);
//get all users data//
router.get('/userlist',AuthController.allusersGet);

//**************************************Company user ends here**************************************//



module.exports = router;