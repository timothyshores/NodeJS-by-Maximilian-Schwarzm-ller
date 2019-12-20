const http = require("http");
const routes = require("./routes");

// create const server and set equal to the console log CB function
const server = http.createServer(routes);

// Creates server on localhost:3000
server.listen(3000);
