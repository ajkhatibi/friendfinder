var friendsList = require('./data.js')

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    })



    app.post('/api/friends/?', function(req, res) {
        var friends = req.body;
        friendsList.push(friends)
        console.log(friendsList);


        var foundFriend = findFriender(req.body.scores);
        res.json(foundFriend);  
    })

    var responseArray = []
    var totalDiff = [];

    function findFriender(newUserScore) {
        for (var i = 0; i < friendsList.length - 1; i++) {
            responseArray[i] = diffMaker(newUserScore, friendsList[i].scores);
        }
        console.log("responseArray is " + responseArray);
        var lowestDiff = Math.min.apply(null, responseArray);
        var bestMatch = friendsList[responseArray.indexOf(lowestDiff)];
        var bestMatchName = friendsList[responseArray.indexOf(lowestDiff)].name;
        var bestMatchPhoto = friendsList[responseArray.indexOf(lowestDiff)].photo;
        console.log("best match is " + bestMatchName + "  " + bestMatchPhoto);
        return bestMatch;
    }


    function diffMaker(x, y) {
        for (var k = 0; k < x.length; k++) {
            totalDiff[k] = Math.abs(x[k] - y[k]);
        }
        console.log("totalDiff is " + totalDiff);
        var result = sumfunction(totalDiff);
        console.log("results is " + result);
        return result;
    }

    function sumfunction(x) {
        var sum = x.reduce(add, 0);

        function add(a, b) {
            return a + b;
        }
        console.log("sum is " + sum);
        return sum;
    }
};




