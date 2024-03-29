const fs = require("fs");

const requestHandler = (req, res) => {
	const { url, method } = req;

	if (url === "/") {
		res.write(
			'<html><head><title>Enter Message</title></head><body><h1>Hello World!</h1><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body></html>'
		);
		return res.end();
	}

	if (url === "/users") {
		res.write(
			"<html><head><title>Enter Message</title></head><body><h1>Users</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User ....</li></ul></body></html>"
		);
		return res.end();
	}

	if (url === "/create-user" && method === "POST") {
		const body = [];
		req.on("data", chunk => {
			body.push(chunk);
		});
		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split("=")[1];
			console.log(message);
		});
	}

	res.setHeader("Content-Type", "text/html");
	res.write(
		"<html><head><title>pp.js</title></head><body><h1>Hello World!</h1></body></html>"
	);
};

module.exports = requestHandler;
