var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.all('/*', function(req, res, next) {
    res.format({
      html: function() {
        res.sendFile(path.join(__dirname, 'index.html'));
      },
      json: function() {
        next();
      }
    });
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log('listening on ' + port);
