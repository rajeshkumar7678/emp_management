const express=require("express")
const { connection } = require("./config/db")
const { userroute } = require("./routes/userroute")
const { emproute } = require("./routes/emproute")
const cors=require("cors")

let port=4545
const app=express()
app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home route")
})


app.use("/user",userroute)

app.use("/emp",emproute)







app.listen(port,async()=>{
    try {
        await connection
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running")
})