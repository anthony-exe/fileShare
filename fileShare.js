//imports
let express = require('express');

//global constants
const PORT = 3000;

//Setup Express
let app = express();
app.set('port', process.env.PORT || PORT);
app.use(express.static(__dirname + '/public'));

//--------------------- Routes -------------------------

//Home Page
app.get('/', function(req, res) {
    res.sendFile('/views/index.html', {root: __dirname});
});

//Send normalize file. (need to find better way to)
app.get('/normalize.css', function(req, res) {
    res.sendFile('node_modules/normalize.css/normalize.css', {root: __dirname});
});

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
