var friendsList = require('../data/friends.js');
var path = require('path');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsList);
    });

    app.post('/api/friends', function (req, res) {
        console.log(req.body);
        friendsList.push(req.body);

    })
}