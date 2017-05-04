// // var $ = require('jquery')
// var express = require('express');
// var app = express();

// app.use(express.static(__dirname))



var express = require('express');
var app = express();

// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());

app.use(express.static(__dirname))

app.get('/', function(req, res) {
  res.sendFile(__dirname + 'index.html');
})


app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 3000!');
});