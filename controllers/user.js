var User = require("../models/user"),
Dish = require("../models/dish");

exports.showProfile=function(req,res,next)
{
    res.render("user/profile");
}

exports.showSetting=function(req,res,next)
{
    res.render("user/setting");
}

exports.setting=function(req,res,next)
{
    User.findByIdAndUpdate(req.user._id,req.body.user,function(err,user)
    {
        if(err) console.log("can not find the user");
        else req.flash("success", "User successfully updated!");
        res.redirect("/user");
    })
}


exports.listFavDishes=function(req,res,next)
{
    
}

exports.listFavHosts=function(req,res,next)
{
    
}

exports.listMyDishes=function(req,res,next)
{
    
}
