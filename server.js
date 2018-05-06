var connect = require('connect');
var serveStatic = require('serve-static');

var port = process.env.PORT || 8000

connect().use(serveStatic('./static')).listen(port, function(){
	console.log('Server running on 8000...');
    });

    
