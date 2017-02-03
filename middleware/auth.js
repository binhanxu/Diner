var Dish = require("../models/dish"),
    User = require("../models/user");

exports.userRequired = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    req.flash("error", "Please log in first!");
    res.redirect("/login");
}


exports.userAuthorizedForDishModification = function(req, res, next) {
    if (req.isAuthenticated()) {
        Dish.findById(req.params.id, function(err, foundDish) {
            if (err) {
                console.log("Can not find the dish");
                req.flash("error", "Can not find the dish!");
                return res.redirect("/dishes");
            }
            else {
                if (req.user._id.equals(foundDish.hostedBy.id))
                    return next();

                req.flash("error", "You do not own the dish!");
                res.redirect("/dishes");
            }
        })
    }
    else {
        req.flash("error", "You have not yet logged in!");
        res.redirect("/login");
    }
}
