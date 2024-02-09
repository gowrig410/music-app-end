const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const musicRoute=require("./controllers/musicRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://gowri:gowri123@cluster0.ysfaxj8.mongodb.net/musicDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/music",musicRoute)


app.listen(3002,()=>{
    console.log("Server Running")
})
