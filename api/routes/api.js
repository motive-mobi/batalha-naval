var express = require('express');
var router = express.Router();
var md5 = require('md5');

/* POST users listing. */
router.post('/', function(req, res, next) {
  let nick = req.body.nickname;
  var hash = md5(nick);

  if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./game');
  }

  if(localStorage.getItem('gameId') === null){
    localStorage.setItem('gameId', hash);
    localStorage.setItem('player1', nick);
    localStorage.setItem('gameReady', 'false');
  }else if(localStorage.getItem('player2') === null){
    localStorage.setItem('player2', nick);
    localStorage.setItem('gameReady', 'true');
  }else{

  }

  console.log(localStorage.getItem('gameId'), localStorage.getItem('player1'), localStorage.getItem('player2'), localStorage.getItem('gameReady'));

  let players = {
    'jogador1': localStorage.getItem('player1'),
    'jogador2': localStorage.getItem('player2'),
  };

  res.json({gameId: localStorage.getItem('gameId'), players: players, gameReady: localStorage.getItem('gameReady')});
  res.end();
});

module.exports = router;
