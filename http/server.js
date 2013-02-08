var http = require('http');

function start(){

	function onRequest( request, response ){
		console.log("request received");
		response.writeHead( 200, {"Content-Type" : "text/plain" } );
		response.write( "Hello World" );
		response.end();
	}

	var httpserver = http.createServer( onRequest );
	httpserver.listen( 8888 );

	console.log("Server has started");
}


exports.start = start;

