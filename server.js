var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic('./static')).listen(8000, function(){
	console.log('Server running on 5050...');
    });

    
