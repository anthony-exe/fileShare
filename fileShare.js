//imports
var express = require('express');

//global constants
const PORT = 3000;

//Setup Express
var app = express();
app.set('port', process.env.PORT || PORT);

//Custom 404 Page
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - I can\'t find that page');
});

//Custom 500 Page
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - 0_o there was a server error.');
});

//Start the server
app.listen(app.get('port'), function() {
    console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-c to terminate.`);
});
