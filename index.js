const liveServer = require("live-server");

module.exports = params = {
	root: "./example",
	file: "index.html",
	wait: 1000,
	port: "8080",
	logLevel: 2,
};
liveServer.start(params);