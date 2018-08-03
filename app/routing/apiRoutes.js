var friendData = require("data/friends.js")  //-------trying to target home.html???

module.exports = function(app) {

    // ----------------------NEED TO WORK ON---------------------------

    app.get("/api/friends", function (req, res) {
        return res.json(friendData);
    });
    
    // app.get("/api/friends/:friend", function (req, res) {
    //     var chosen = req.params.friend;
        
    //     console.log(chosen);
        
    //     for (var i = 0; i < friends.length; i++) {
    //         if (chosen === friends[i].name) {
    //             return res.json(characters[i]);
    //         }
    //     }
        
    //     return res.json(false);
    // });
    
    app.post("/api/friends", function (req, res) {
        
        var newFriend = req.body;
        
        console.log(newFriend);
        
        friends.push(newFriend);
        
        res.json(newFriend);
    });
};