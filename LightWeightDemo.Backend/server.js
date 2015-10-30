var http = require('http');
var port = process.env.port || 8080;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World, I am the backend!\n');

	// Retrieve
	var MongoClient = require('mongodb').MongoClient;
	
	// Connect to the db
	MongoClient.connect("mongodb://"+process.env.MONGO_PORT_27017_TCP_ADDR +":"+ process.env.MONGO_PORT_27017_TCP_PORT +"/exampleDb", function (err, db) {
		if (!err) {
			console.log("We are connected");
		}
	});
}).listen(port);


