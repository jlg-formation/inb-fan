var express = require('express');
var router = express.Router();
var fs = require('fs');

module.exports = router;
console.log('webservice');

var fn = (req, res, next) => {
	console.log('calling s1', req.url);
	fs.readFile('./ws' + req.url, 'utf8', function(err, data) {
		if (err) {
			return console.log(err);
		}
		console.log(data);
		var json = JSON.parse(data);
		var delay = json.delay;
		console.log('delay', delay);
		setTimeout(function() {
			res.send(json);
		}, delay);
	});
}

router.get(['/s1', '/s2', '/s3', '/s4', '/s5', '/s6'], fn);
