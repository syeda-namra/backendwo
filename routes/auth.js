const router = require('express').Router();
const userProfile = require('../model/userProfile');
const User=require('../model/User');
const driver = require('../model/driver');
const Admin = require('../model/Admin');
const carpool = require('../model/carpool');


const { Router } = require('express');
const AuthController = require("../controllers/AuthController");
const UserprofileController=require("../controllers/UserprofileController");
const DriverController=require("../controllers/DriverController");
const AdminController= require("../controllers/AdminController");
const CarpoolController= require("../controllers/CarpoolController");

//const registerValidation = require('../validation');

router.put('/:id/edituser',UserprofileController.edituser);
router.get('/getallusers',UserprofileController.getallusers);
router.get('/:id/getoneuser',UserprofileController.singleuseget);
router.post('/adduser',UserprofileController.addnewuser);
router.delete('/:id/deleteuser',UserprofileController.userDelete);
router.get('/getprofilecount',UserprofileController.getprofilecount);
//***********************************Company routes start**********************/    
//get****** driver controllers**********************//
router.get('/getdrivercount',DriverController.getdrivercount);
//================
//register new user
router.post('/register',AuthController.register);
//register new admin
router.post('/adregister',AdminController.addAdmin);
router.post('/alogin',AdminController.login);
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



//**************get all car pools************************** */

router.get('/carpools',CarpoolController.getallpools);

//**************************************Company user ends here**************************************//



module.exports = router;