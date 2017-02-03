var express = require("express"),
    router = express.Router(),
    sign = require("../controllers/sign"),
    user = require("../controllers/user"),
    auth = require("../middleware/auth"),
    host = require("../controllers/host"),
    guest = require("../controllers/guest"),
    dish = require("../controllers/dish"),
    review = require("../controllers/review");
    
router.get("/", function(req, res) {
    res.render("partials/landing"); 
});

//sign
router.get("/register", sign.showSignUp);
router.post("/register", sign.signUp);
router.get("/login",sign.showLogIn);
router.post("/login",sign.logIn);
router.get("/logout", sign.logOut);

//user
router.get('/user', auth.userRequired, user.showProfile);
router.get('/setting', auth.userRequired, user.showSetting);
router.post('/setting', auth.userRequired, user.setting);
// router.get('/user/fav-hosts', auth.userRequired, user.listFavHosts);
// router.get('/user/fav-dishes', auth.userRequired, user.listFavDishes);
// router.get('/user/my-dishes', auth.userRequired, user.listMyDishes);
            
//hosts
router.get('/hosts', host.index);
router.get('/hosts/:id',host.showProfile);
router.post('/hosts/:id/favorite',auth.userRequired,dish.favorite);
router.post('/hosts/:id/unfavorite',auth.userRequired,dish.unfavorite);


//guests
router.get('/guests', guest.index);
router.get('/guests/:id',guest.showProfile);

//dishes
router.get('/dishes',dish.index);
router.post('/dishes',auth.userRequired, dish.create);
router.get('/dishes/new',auth.userRequired,dish.new);
router.get('/dishes/:id',dish.show);
router.get('/dishes/:id/edit',auth.userAuthorizedForDishModification,dish.showEdit);
router.put('/dishes/:id/',auth.userAuthorizedForDishModification,dish.update);
router.delete('/dishes/:id/',auth.userAuthorizedForDishModification,dish.delete);

router.post('/dishes/:id/favorite',auth.userRequired,dish.favorite);
router.post('/dishes/:id/unfavorite',auth.userRequired,dish.unfavorite);
router.post('/dishes/:id/reserve',auth.userRequired,dish.reserve);


//reviews
// router.get('dishes/:id/reviews',review.indexForDish);
// router.get('hosts/:id/reviews',review.indexForHost);
// router.post('dishes/:id/reviews',auth.userRequired,review.create);
// router.get('dishes/:id/reviews/new',auth.userRequired,review.new);

module.exports=router;