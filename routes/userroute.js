const express=require("express")
const { usermoodel } = require("../model/usermodel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


const userroute=express.Router()

userroute.get("/",(req,res)=>{
    res.send("user route")
})


userroute.post("/signup",async(req,res)=>{
    try {
        let {email,password}=req.body

        let user=await usermoodel.findOne({email})
        if(user){
            return res.status(400).send({"msg":"user already present"})
        }

        let hashpass=bcrypt.hashSync(password,7)

        let newuser=new usermoodel({email,password:hashpass})
        await newuser.save()

        res.status(200).send({"msg":"user registration successfull"})

    } catch (error) {
        console.log(error)
    }
})




userroute.post("/login",async(req,res)=>{
    try {
        let {email,password}=req.body
        let user=await usermoodel.findOne({email})
        if(!user){
            return res.status(201).send({"msg":"register first then login"})
        }
        let hashpass=bcrypt.compare(password,user.password)
        if(!hashpass){
            return res.status(201).send({"msg":"password incorrect"})
        }
        const token=jwt.sign({id:user._id},"masai",{expiresIn:"6h"})

        res.status(201).send({"msg":"login successfull","token":token})
    } catch (error) {
        console.log(error)
    }
})
















module.exports={
    userroute
}