var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/devf');

var userSchema = mongoose.Schema({
	name: String
});

var User = mongoose.model('User', userSchema);

/*User-------Users */

/* GET users listing. */
router.get('/', function(req, res, next) {

	User.find({}, function(err, users) {
	    var userMap = [];

	    users.forEach(function(user) {
	      userMap.push( user);
	    });

	  	res.send(userMap);
  	});

});

module.exports = router;
