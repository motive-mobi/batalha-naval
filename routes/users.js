var express = require('express');
var router = express.Router();
var md5 = require('md5');

/* GET users listing. */
router.post('/', function(req, res, next) {
  let nick = req.body.nickname;
  var hash = md5(nick);
  //console.log(hash);
  let user = [];
  user = {
    'userNick':nick,
    'userHash':hash,
  };
  
  res.render('index', {nick: nick,userHash: hash , title:'Batalha Naval'});
});

module.exports = router;
