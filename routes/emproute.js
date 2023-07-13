const express=require("express")
const { empmoodel } = require("../model/empmodel")

const emproute=express.Router()

emproute.get("/",async(req,res)=>{
    try {
        let emp=await empmoodel.find()
        res.send({"employees":emp})
    } catch (error) {
        console.log(error)
    }
})

emproute.post("/employee",async(req,res)=>{
    try {
        let payload=req.body
        let user= new empmoodel(payload)
        await user.save()
        res.send({"msg":"employee added successful"})

    } catch (error) {
        console.log(error)
    }
})


emproute.put("/employee/:id",async(req,res)=>{
    try {
        let {id}=req.params
        let payload=req.body
        let emp= await empmoodel.findByIdAndUpdate({_id:id},payload)

        res.send({"msg":"employee update successful"})

    } catch (error) {
        console.log(error)
    }
})

emproute.delete("/employee/:id",async(req,res)=>{
    try {
        let {id}=req.params
        
        let emp= await empmoodel.findByIdAndDelete({_id:id})

        res.send({"msg":"employee deleted successful"})

    } catch (error) {
        console.log(error)
    }
})












module.exports={
    emproute
}