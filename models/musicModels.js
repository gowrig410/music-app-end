const mongoose=require("mongoose")
const musicSchema=new mongoose.Schema(
    {
    name:String,
    director:String,
    singer:String,
    year:String,
   }
)

module.exports=mongoose.model("music",musicSchema)
