var mongoose=require("mongoose");

var dishSchema=new mongoose.Schema({
   title:String,
   description:String,
   thumbnail:String,
   more_images:[{type:String}],

   
   cusineStyle:String,
   recipe:String,
   
   startServedTime:String,
   endServedTime:String,
   totalSlot:Number,
   remainedSlot:Number,
   
   created_at:{type:Date,default:Date.now},
   updated_at:{type:Date,default:Date.now},
   address:String,
   
   favoredBy:[{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
   
   hostedBy:
   {
      id:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
      username:String
   },
   guestReviews:[{type: mongoose.Schema.Types.ObjectId, ref: "Review"}]
});

module.exports=mongoose.model("Dish",dishSchema);