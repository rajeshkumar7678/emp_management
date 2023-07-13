const { default: mongoose } = require("mongoose")



const userschema=mongoose.Schema({
    email:String,
    password:String
})

const usermoodel=mongoose.model("user",userschema)

module.exports={
    usermoodel
}
