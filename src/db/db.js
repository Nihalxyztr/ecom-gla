const mongoose=require("mongoose")
const { log } = require("node:console")

const connect=()=>{
    mongoose.connect(process.env.MONGODB)
    .then(()=>{
        console.log("MongoDb connected")
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports=connect