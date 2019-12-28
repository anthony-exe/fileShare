//imports
let express = require('express');
let formidable = require('formidable');

//global constants
const PORT = 3000;

//Setup Express
let app = express();
app.set('port', process.env.PORT || PORT);
app.use(express.static(__dirname + '/public'));

//--------------------- Routes ------------------------

//Send normalize file. (need to find better way to)
app.get('/style/normalize.css', function(req, res) {
    res.sendFile('node_modules/normalize.css/normalize.css', {root: __dirname});
});

//Handle file upload
app.post('/upload-file', function(req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = __dirname + "/uploads";
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
        if(err) {
            return res.redirect(303, '/error');
        }
        console.log(`Received files: ${files}`);
        console.log(`Received fields: ${fields}`);
        res.send('It worked');
    });
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
