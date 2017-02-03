var User = require("../models/user"),
    passport = require("passport");
    
exports.showSignUp = function(req, res) {
    res.render("register");
}

exports.signUp = function(req, res) {

    User.register(new User({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }), req.body.password,
        function(err, user) {
            if (err) {
                req.flash("error", err.message);
                res.redirect("/register");
            }
            else {

                passport.authenticate("local")(req, res, function() {
                    req.flash("success", "Successfully register " + user.username);
                    res.redirect("/dishes");

                });
            }

        });
}

exports.showLogIn = function(req, res) {
    res.render("login");
}

exports.logIn = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login');
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            return res.redirect('/dishes');
        });
    })(req, res, next);
};

exports.logOut = function(req, res) {
    req.logout();
    req.flash("success", "Successfully logged out!");
    res.redirect("/dishes");
}
