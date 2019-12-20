// import http & fs core modules included with Node.js
const http = require("http");
const fs = require("fs");

// create const server and set equal to the console log CB function
const server = http.createServer((req, res) => {
	const { url, method } = req;
	if (url === "/") {
		res.write(
			'<html><head><title>Enter Message</title></head><body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body></html>'
		);
		return res.end();
	}

	if (url === "/message" && method === "POST") {
		fs.writeFileSync("message.txt", "DUMMY TEXT");
		res.statusCode = 302;
		res.setHeader("Location", "/");
		return res.end();
	}

	res.setHeader("Content-Type", "text/html");
});

// Creates server on localhost:3000
server.listen(3000);
