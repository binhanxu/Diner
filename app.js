var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    methodOverride = require("method-override"),
    flash = require("connect-flash"),
    seedDB = require("./seeds");
    
var User=require("./models/user");

var indexRoutes=require("./routes");

//seedDB();

mongoose.Promise = global.Promise;

app.use(flash());
app.use(methodOverride("_method"));
mongoose.connect("mongodb://localhost/diner_app");

app.use(require("express-session")({
    secret: "I don't know how to set this secret",
    resave: false,
    saveUninitialized: false
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));

app.use(indexRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Diner App now serving!");
});
