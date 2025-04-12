const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
	res.writeHead(200);
	res.end("hello from jenkins pipeline demo!");
});
server.listen(port, () => {
	console.log(`server running at http://localhost:${port}`);
});
