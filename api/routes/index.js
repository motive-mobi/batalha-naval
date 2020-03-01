var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  /*res.render('index', {
    title: 'Batalha Naval',
    nick: '',
    game: req.session.gameId,
    players: '',
  });*/
  res.render('index', {
    title: 'Batalha Naval: API v1'
  });
  //res.sendFile('index.html', { root: './views' });

});

module.exports = router;
