var mongoose=require("mongoose"),
passportLocalMongoose=require("passport-local-mongoose");

var userSchema=new mongoose.Schema({
   username:String,
   password:String,
   
   first_name:String,
   last_name:String,
   email:String,
   profile_img_url:{type:String,default:"https://www.fanwide.com/content/images/avatar.png"},
   signature:String,
   address:String,
   
   facebookAccount:String,
   googleAccount:String,
   created_at:{type:Date,default:Date.now},
   updated_at:{type:Date,default:Date.now},
   
   
   isSuperHost:{type:Boolean,default:false},
   isSuperGuest:{type:Boolean,default:false},
   isAdmin:{type:Boolean,default:false},
   
   score:{type:Number,default:0},
   level:{type:Number,default:0},
   
   favDishes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Dish"
    }],
    
   favHosts:[
   {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
   }],
   
   triedDishes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Dish"
   }],
    
   visitedHosts:[
   {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
   }],
    
   
   myDishes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Dish"
   }],
   
   servedGuests:[
   {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
   }]
});

userSchema.plugin(passportLocalMongoose);

userSchema.pre('save', function(next){
  var now = new Date();
  this.updated_at = now;
  next();
});

module.exports=mongoose.model("User",userSchema);