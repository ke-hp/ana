const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const basename = path.basename(module.filename);
const db:any = {};

fs
	.readdirSync(__dirname)
	.filter(function (file:any) {
		return (file.indexOf('.') !== 0) && (file !== basename);
	})
	.forEach(function (file:any) {
		if (file.slice(-3) !== '.js') return;
		let model = require(`./${file}`)(mongoose);
		db[model.modelName] = model;
	});

const mongo = mongoose.connection;

mongo.on('error', function (err:any) {
	console.log('Connection error:', err.message);
});

mongo.once('open', async function callback() {
	await db.mac.updateMany({
		connected: true
	}, {
		connected: false
	});
	console.log("Connected to DB!");
});


module.exports = db;