var liveServer = require("live-server");

var params = {
	root: "./example",
	file: "index.html",
	wait: 1000,
	logLevel: 2,
};
liveServer.start(params);