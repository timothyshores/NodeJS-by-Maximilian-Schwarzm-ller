// Instructor's solution code

const http = require("http");

const server = http.createServer((req, res) => {
	const { url } = req;

	if (url === "/") {
		res.setHeader("Content-Type", "text/html");
		res.write(
			"<html><head><title>Assignment 1</title></head><body><h1>Assignment 1></h1><form action='create-user' method='post'><input type='text' name='username'><button>Send</button></form></body></html>"
		);
		return res.end();
	}
	if (url === "/users") {
		res.setHeader("Content-Type", "text/html");
		res.write(
			"<html><head><title>Assignment 1</title></head><body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>"
		);
		return res.end();
	}

	if (url === "/create-user") {
		const body = [];
		req.on("data", chunk => {
			body.push(chunk);
		});
		req.on("end", () => {
			const parseBody = Buffer.concat(body).toString();
			console.log(parseBody.split("=")[1]);
		});
		res.statusCode = 302;
		res.setHeader("Location", "/");
	}
});

server.listen(3000);
