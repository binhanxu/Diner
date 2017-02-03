var Dish = require("../models/dish");

exports.index = function(req, res) {
    Dish.find({}, function(err, dishes) {
        if (err) console.log("Couldn't load dishes!");
        else {
            res.render("dish/index", {
                dishes: dishes
            });
        }
    });
}


exports.new = function(req, res) {
    res.render("dish/new");
}

exports.create = function(req, res) {

    var newDish = {
        title: req.body.dish.title,
        thumbnail: req.body.dish.thumbnail,
        description: req.body.dish.description,
        hostedBy: {
            id: req.user._id
        }
    };

    Dish.create(newDish, function(err, dish) {
        if (err) req.flash("error", "Can not create dish successfully!");
        else {

            req.flash("success", "Dish successfully created!");

            req.user.myDishes.push(dish);
            req.user.save(function(err, user) {
                if (err) console.log(err);
            })
        }
    });

    res.redirect("/dishes");
}

exports.show = function(req, res) {
    Dish.findById(req.params.id).exec(function(err, dish) {

        if (err) req.flash("error", "Dish not found!");
        else res.render("dish/show", {
            dish: dish
        });
    });

}

exports.showEdit = function(req, res) {
    Dish.findById(req.params.id, function(err, dish) {
        if (err) {
            req.flash("error", "Dish not found!");
            res.redirect("/dishes");
        }
        else res.render("dish/edit", {
            dish: dish
        });
    });
}

exports.update = function(req, res) {
    Dish.findByIdAndUpdate(req.params.id, req.body.dish,
        function(err, dish) {
            if (err) req.flash("error", "Dish not found!");
            else req.flash("success", "Dish successfully modified!");
            res.redirect("/dishes/" + req.params.id);
        });
}

exports.delete = function(req, res) {
    Dish.findByIdAndRemove(req.params.id, function(err, dish) {
        if (err) req.flash("error", "Dish not found!");
        else req.flash("success", "Dish successfully deleted!");

        res.redirect("/dishes");
    });
}

exports.favorite=function(req,res)
{
}

exports.unfavorite=function(req,res)
{
}

exports.reserve=function(req,res)
{
}
