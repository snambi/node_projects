var http = require('http');

function onRequest( request, response ){
	console.log("request received");
	response.writeHead( 200, {"Content-Type" : "text/plain" } );
	response.write( "Hello World" );
	response.end();
}
var server = http.createServer( onRequest );
server.listen( 8888 );

console.log("Server has started");
