const ngrok = require('ngrok');
const AwesomeQR = require('awesome-qr');
const options = require('command-line-parser')();
const fs = require('fs');

function imageFilePath() {
	const os = require('os');
	const path = require('path');
	return path.resolve(os.tmpdir(), 'qr.png');
}

function openImage(filePath) {
	console.log("Unable to image at: " + filePath);
}

module.exports = async (arguments, cwd) => {
	console.log(options);
	const url = await ngrok.connect(options.port || 8080);
	console.log(`Tunnel at: ${url}`);

	new AwesomeQR().create({
		text: url,
		size: 500,
		callback: data => {
			// binary PNG data
			console.log("Generated QR Code...")
			// var buffer = new Buffer(data, 'base64');
			const filePath = imageFilePath();
			fs.writeFile(filePath, data, (err) => {
				if (err) {
					console.error("Error writing file:\n" + JSON.stringify(err, null, 2));
				} else {
					console.log("Wrote qr image to file: " + filePath);
					openImage(filePath);
				}
			});
		}
	});
};
