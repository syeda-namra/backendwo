const mongoose = require('mongoose');

var Schema = mongoose.Schema;




const userSchema = new Schema(
    {
        firstName:{
            type: String,
            
            min:4,
            max:20


            },
        lastName:{
                type: String,
                
                min:4,
                max:20  
    
                },
        contactNo:{
                type: String,                
                min:4,
                max:25  

            },
        country:{
                    type: String,
                    
                    min:4,
                    max:20
        
        
                    },
        // city:{
        //           type: String,
                  
        //           min:5,
        //           max:20
            
            
        //             },
        companyName:{
                type: String,
                
                min:5,
                max:25                
                
                        },
        corporateHierarchy:{
            type: String,               
            min:5,
            max:25
        },
        websiteUrl:{
                type: String,
               
                min:5,
                max:25
                    
                    
        },
        address:{
                    type: String,
                    
                    min:5,
                    max:25
            
            
                    },
        email:{
                type: String,
                
                min:6,
                max:100
            },

        password:{
            type: String,
            
            min:6,
            max:255
        },
        signature:{
            type: String,            
            min:6,
            max:100
        },
        econcent: {
             type: Boolean,
             
            },
        
        
        date:{
            type: Date,
            default: Date.now
             
        }

    });


    





// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');




 // Virtual for user's full name
userSchema
.virtual("fullName")
.get(function () {
    return this.firstName + " " + this.lastName;
});


    
    module.exports= mongoose.model('User',userSchema);
   

   