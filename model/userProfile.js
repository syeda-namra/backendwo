const mongoose = require('mongoose');
var Schema = mongoose.Schema;



const userProfile = new Schema({

   

    OrganizationDetail:{
        fullName:{
            type:String,
            required: true
        },
        
        organization_id:{
             type:String,
             required: true,
             unique:true
         },
        department:{
            type: String,
            required: true
        },
        faculty:{
            type: String,
            required: true
        },
        contact_number:{
            type: String,
            required: true
        }

    },

    VehicleDetail:{

        model_no:{
            type: String,
            required: true
        },
        number_plate:{
            type: String,
            required: true
        },
        color:{
            type: String,
            required: true
        }
    },

    role:{
         type: String,
         required: true,
        default:"driver"
    },

    verified:{
        type:Boolean,
        default: false

    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }





}, { versionKey: false });



mongoose.model('userProfile',userProfile);
module.exports= mongoose.model('userProfile',userProfile);