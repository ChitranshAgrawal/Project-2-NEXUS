const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Authentication")

.then(()=>{
    console.log("MongoDb Connected");
})
.catch(()=>{
    console.log("Failed to connect");
})

const loginSchema = new mongoose.Schema({
    name:{
        type:String,
        requied:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection1", loginSchema)

module.exports = collection;

