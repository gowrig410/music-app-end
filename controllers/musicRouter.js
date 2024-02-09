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

router.get("/view",async(req,res)=>{
    let data=await musicModel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await musicModel.find(input)
    res.json(data)
})


module.exports=router