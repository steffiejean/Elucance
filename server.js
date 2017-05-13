require('dotenv').config()
var express = require('express');
var app = express();
var helper = require('sendgrid').mail

app.use(express.static(__dirname))

app.get('/', function(req, res) {
  res.sendFile(__dirname + 'index.html');
})

app.get('/send', function(req, res) {
  fromEmail = new helper.Email(req.query.email);
  toEmail = new helper.Email(process.env.EMAIL);
  name = req.query.name
  phone = req.query.phone
  message = new helper.Content("text/plain", req.query.message + "\nphone: " + phone)
  mail = new helper.Mail(fromEmail, name, toEmail, message)
  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });
  sg.API(request, function(error, response) {
    console.log(response.statusCode)
    console.log(response.body)
    console.log(response.headers)
    console.log("COMPLETE")
  });
  res.end()

});



app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!');
});