var mongoose=require("mongoose");

var reviewSchema=new mongoose.Schema({
   name:String,
   content:String,
   tastyIndex:Number,
   cleaninessIndex:Number,
   valueIndex:Number,
   
   created_at:{type:Date,default:Date.now},
   writtenBy:{
      id:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
      username:String
   },
   reviewedDish:{
      id:{type: mongoose.Schema.Types.ObjectId, ref: "Dish"}
   }
});

module.exports=mongoose.model("Review",reviewSchema);