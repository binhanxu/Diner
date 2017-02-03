var mongoose = require("mongoose"),
Dish = require("./models/dish");

//mongoose.connect("mongodb://localhost/yelp_camp");

var data = [{
        title: "Keep calm and eat my porridge",
        thumbnail: "https://c1.staticflickr.com/9/8469/8147740415_9a7939ed7c_o.jpg",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },

    {
        title: "Spare Ribs",
        thumbnail: "https://c2.staticflickr.com/8/7218/7251192304_c40591b000_o.jpg",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },

    {
        title: "NooOOoodle",
        thumbnail: "https://c2.staticflickr.com/8/7236/7158576599_ce89debf56_o.jpg",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

    },

    {
        title: "Spagetti",
        thumbnail: "https://c2.staticflickr.com/8/7242/7159318915_afee6467f2_o.jpg",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    }
];

function seedDB() {
    Dish.remove({}, function(err) {
        if (err) console.log(err);
        else {
            console.log("removed all dishes!");
            data.forEach(function(seed)
            {
                Dish.create(new Dish(seed),function(err,dish)
                {
                    if(err) console.log(err);
                    else{
                        // Comment.create(new Comment(
                        //     {
                        //         author:"Homer",
                        //         text:"I love this place, but hopinf this is wifi!"
                        //     }),function(err,comment)
                        //     {
                        //         if(err) console.log(err);
                        //         else
                        //         {
                        //             dish.comments.push(comment);
                        //             dish.save(function(err,dish)
                        //             {
                        //                 if(err) console.log(err);
                        //                 else console.log("added a new dish!");
                        //             });
                        //         }
                        //     })
                    }
                })
            })
        }
    })
}

module.exports=seedDB;