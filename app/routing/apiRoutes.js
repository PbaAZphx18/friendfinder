var friendData = require("../data/friends");  

console.log("THIS IS OUR DATABASE: ", friendData);

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
        // console.log("this is newFriend before constructor: ", newFriend);

        let Friend = function(name, photo, scores){
            this.name = name;
            this.photo = photo;

            this.scores = scores.map(function(score){
                return parseInt(score);
            })
        }

        newFriend = new Friend(newFriend.name, req.body.photo, newFriend.scores)
        
        // console.log("this is newFriend after running it through constructor: ", newFriend);

        let totalMatches = [];

        // console.log("friend data.length : ", friendData.length);

        for(let i = 0; i < friendData.length; i++){

            // console.log("friend data inside outer array: ",friendData[i]);
            let matchScore = [];

            for(let y = 0; y < newFriend.scores.length; y++){
                
                matchScore.push(Math.abs(friendData[i].scores[y] - newFriend.scores[y]));
            }

            totalMatches.push(matchScore);
        }

        console.log("this is our total matches: ", totalMatches);


        let chosenFriendArray = [];


        const reducer = (accumulator, currentValue) => accumulator + currentValue; 

        for(let i = 0; i < totalMatches.length; i++){
            chosenFriendArray.push(totalMatches[i].reduce(reducer));
        }

        console.log("These our our total matches reduced to a single whole number: ", chosenFriendArray);


        let matchedFriendIndex = Math.min.apply(null, chosenFriendArray);
        console.log("matchedFriend index: ", matchedFriendIndex);

        let friendDataIndex = chosenFriendArray.indexOf(matchedFriendIndex);
        console.log("This is the index of our original array (database) that is matched up with the lowest score: ", friendDataIndex);

        let chosenFriend = friendData[friendDataIndex];

    
        
        // friends.push(newFriend);

        friendData.push(newFriend);
        
        res.json(chosenFriend);
    });
};


//array.reduce array.map