const express=require("express")
const musicModel=require("../models/musicModels")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let music=new musicModel(data)
    let result=await music.save()
    res.json(
        {
        status :"success"
    })

})




module.exports=router