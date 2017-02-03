var User = require("../models/user"),
Dish = require("../models/dish");
exports.index = function(req, res) {
    
    User.find({ myDishes: { $exists: true, $not: {$size: 0}}, 
    _id: {$ne: req.user && req.user._id} } , function(err, hosts) {
        if (err) console.log("Something went wrong retrieving hosts!");
        else {
            res.render("host/index", {
                hosts: hosts
            });
        }
    });
    
}

exports.showProfile=function(req,res,next)
{
    User.findById(req.params.id).populate("myDishes").
    populate("servedGuests").exec(function(err, host) {
        if (err) console.log("Couldn't load host!");
        else {
            res.render("host/show", {
                host: host
            });
        }
    });
}


exports.favorite=function(req,res)
{
}

exports.unfavorite=function(req,res)
{
}
