var sequence = require('../sequence.js');

function async(arg, callback) {
	console.log('called with argument ' + JSON.stringify(arg) + ', ' + ' sequence number ' + (arg.length + 1));
	setTimeout(function() {
		callback(null, {
			"result": arg.length
		});
	}, 2000);
}

function async_error(arg, callback) {
	console.log('called with argument ' + JSON.stringify(arg) + ', ' + ' sequence number ' + (arg.length + 1) + " but throwing error this time");
	setTimeout(function() {
		callback({
			"error": "error occured"
		}, {
			"result": arg.length
		});
	}, 2000);
}

var fns = [async, async, async_error, async];

sequence(fns);
