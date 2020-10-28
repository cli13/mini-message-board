var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Today is a sunny day.",
    user: "Gayle",
    added: new Date()
  },
  {
    text: "I had pancake today for dinner.",
    user: "May",
    added: new Date()
  }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next){
  res.render('new',{title: 'New Message'})
})

router.post('/new', function(req, res, next){
  messages.push(
    {
      text: req.body.messageText,
      user: req.body.user,
      added: new Date()
    }
  )
  res.redirect('/');
})

module.exports = router;
