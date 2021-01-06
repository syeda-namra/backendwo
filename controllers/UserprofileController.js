const userProfile = require('../model/userProfile');





exports.addnewuser = async(req,res,next)=>{
    const profile = new userProfile({
        

        OrganizationDetail:{
            // organization_id = req.body.OrganizationDetail.organization_id,
            // department = req.body.OrganizationDetail.department,
            // faculty = req.body.OrganizationDetail.faculty,
            fullName:req.body.OrganizationDetail.fullName,
            organization_id:req.body.OrganizationDetail.organization_id,
            department:req.body.OrganizationDetail.department,
            faculty:req.body.OrganizationDetail.faculty,
            contact_number:req.body.OrganizationDetail.contact_number

        },

        VehicleDetail:{
            // model_no = req.body.VehicleDetail.model_no,
            // number_plate = req.body.VehicleDetail.number_plate,
            // color = req.body.VehicleDetail.color

            model_no:req.body.VehicleDetail.model_no,
            number_plate:req.body.VehicleDetail.number_plate,
            color:req.body.VehicleDetail.color

        },
        user_id:req.body.user_id
    
 
    });
        try {
            const saveduserprofile = await profile.save();
            // console.log(savedUser);
    
            res.send(saveduserprofile);
            next();
            
        } catch (error) {
            res.status(400).send(error);
        }
 
    }

exports.edituser =  function (req,res,next){
    var conditions ={_id: req.params.id};
   
    userProfile.updateOne(conditions, req.body)   
        .then(doc =>{
            if(!doc){
                return res.status(404).end();}
                return res.status(200).json(doc);
            })
            .catch(err => next(err));
        
    
   
    }



    exports.getallusers=async(req , res)=> {
        userProfile.find({}).then(function (userProfile) {
        res.send(userProfile);
        console.log("users are" + userProfile);
        });
       }
       //get all users count(user profiles)

       exports.getprofilecount = async(req,res,next)=>{
        // BrandEmployee.findOne(req.query)
        let query;
        let result = JSON.stringify(req.query);
        result = result.replace(/\b(gt|gte|lt|lte|in)\b/g,match => `$${match}`);
        console.log(result);

        query = userProfile.find(JSON.parse(result));
        
        const inf = await query
        res
        .status(200)
        .json({count:inf.length});
    }


    


       exports.singleuseget=async(req,res)=>{
        userProfile.findOne({_id: req.params.id},function(error,userProfile){
            console.log("This user will get selected "+ userProfile);
 
            res.send("This user is selected"+ userProfile);
        });
    }


    exports.userDelete =  async(req,res,next)=>{

        userProfile.findOne({_id: req.params.id}, function (error, userProfile){
            console.log("This object will get deleted " + userProfile);
            
            userProfile.remove();
            res.send("This user is removed "+ userProfile);
            next();
        
        });
    }

    