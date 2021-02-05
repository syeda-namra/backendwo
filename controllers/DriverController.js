const driver = require('../model/driver');


exports.getdrivercount = async(req,res,next)=>{
    // BrandEmployee.findOne(req.query)
    let query;
    let result = JSON.stringify(req.query);
    result = result.replace(/\b(gt|gte|lt|lte|in)\b/g,match => `$${match}`);
    console.log(result);

    query = driver.find(JSON.parse(result));
    
    const inf = await query
    res
    .status(200)
    .json({count:inf.length});
}
exports.getalldrivers=async(req , res)=> {
    carpool.find({}).then(function (driver) {
    res.send(driver);
    console.log(driver);
    });
   }
