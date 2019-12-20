// import the http core module includedd with Node.js
const http = require("http");

// create const server and set equal to the console log CB function
const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>App.js</title></head>");
	res.write("<body><h1>Hello World!</h1></body>");
	res.write("</html>");
	res.end();
});

// Creates server on localhost:3000
server.listen(3000);
