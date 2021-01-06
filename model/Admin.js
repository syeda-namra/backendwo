const mongoose = require('mongoose');
// const { estimatedDocumentCount } = require('./driver');

var Schema = mongoose.Schema;




const adminSchema = new Schema(
{
    adminName:{
        type: String,
         min: 5,
         max:20

    },
    email:{

        type: String,
        min: 10,
        max:30
        },
    password: {
        type:String,
        min:10,
        max:20
    }
    }) 
    module.exports= mongoose.model('Admin',adminSchema);