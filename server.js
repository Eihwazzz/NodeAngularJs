var express = require('express');
 var path = require('path');
var app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'httpInterceptorApp')));

/*app.get('/', function (req, res) {
    res.render(require.resolve('./httpInterceptorApp'));
});*/

app.listen(port);
console.log('Servidor ejecutandose en localhost, puerto: ' + port);

//module.exports = app;