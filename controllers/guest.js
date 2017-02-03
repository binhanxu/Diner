var User = require("../models/user"),
Dish = require("../models/dish");

//add better guest filtering
//add guest attribute: intendedToDine
exports.index = function(req, res) {

    User.find({_id: {$ne: req.user && req.user._id} } , function(err, guests) {
        if (err) console.log("Something went wrong retrieving guests!");
        else {
            res.render("guest/index", {
                guests: guests
            });
        }
    });
    
}

exports.showProfile=function(req,res,next)
{
    User.findById(req.params.id)
    .populate("favDishes")
    .populate("favHosts")
    .populate("triedDishes")
    .populate("visitedHosts")
    .exec(function(err, guest) {
        if (err) console.log("Couldn't load guest!");
        else {
            res.render("guest/show", {
                guest: guest
            });
        }
    });
}
