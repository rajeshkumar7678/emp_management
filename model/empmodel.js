const { default: mongoose } = require("mongoose")



const empschema=mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    department:String,
    salary:Number
   
})

const empmoodel=mongoose.model("employee",empschema)

module.exports={
    empmoodel
}