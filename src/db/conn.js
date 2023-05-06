const mongoose  = require("mongoose")

console.log("connecting mongodb")
mongoose.connect("mongodb://127.0.0.1:27017/students-api",{
  
}).then(()=>{
    console.log("connection Success")
}).catch((error)=>{
    console.log(error)
})

