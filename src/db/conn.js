const mongoose  = require("mongoose")

console.log("connecting mongodb")
mongoose.connect("mongodb+srv://sagarkhatridk:10102000mongo@cluster0.wlv1zuq.mongodb.net/students-api",{
  
}).then(()=>{
    console.log("connection Success")
}).catch((error)=>{
    console.log(error)
})

