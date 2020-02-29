var express = require('express');
var router = express.Router();
var md5 = require('md5');

/* POST users listing. */
router.post('/', function(req, res, next) {
  let nick = req.body.nickname;
  var hash = md5(nick);

  if(!req.session.gameId){
    req.session.gameId = hash;
    req.session.player1 = nick;
  }else if(!req.session.player2){
    req.session.player2 = nick;
  }

  let players = {
    'jogador1': req.session.player1,
    'jogador2': req.session.player2,
  };

  //console.log('game id: ', req.session.gameId);
  //console.log('jogadores: ', players);

  res.json({game: req.session.gameId, players: players});
  res.end();
});

module.exports = router;
