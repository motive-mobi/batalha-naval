var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    title: 'Batalha Naval',
    nick: '',
    game: '',
    players: '',
  });
});

module.exports = router;
