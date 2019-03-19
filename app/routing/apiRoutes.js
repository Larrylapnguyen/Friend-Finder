var path = require("path");

var fList = require("../data/friends.js");

module.exports = function (app) {
	app.get('/api/friends', function (req, res) {
		res.json(fList);
	});

	app.post('/api/friends', function (req, res) {
		var input = req.body;
		var userScore = input.score;

		var mDiff = 1000;
		var bF = 0;

		for (var i = 0; i < userScore.length; i++) {
			userScore[i] = parseInt(userScore[i]);
		}
		for (let j = 0; j < fList.length; j++) {
			var tDiff = 0;
			for (let z = 0; z < fList[j].score.length; z++) {

				tDiff += Math.abs(input.score[z] - fList[j].score[j]);
			}
			if (tDiff < mDiff) {
				bF = j;
				mDiff = tDiff;
			}
		}
		fList.push(input);
		res.json(fList[bF]);
		// res.json({
		// 	status: 'OK',
		// 	name: i
		// });

	});
};