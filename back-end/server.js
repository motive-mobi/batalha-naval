const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });
const log = new Array;
var gameId = '';
var player1 = '';
var player2 = '';

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
    console.log(data);
    //console.log(JSON.parse(data));
    //createGame(JSON.parse(data));
  });
});

function createGame(data) {
  if(gameId === '' && player1 === ''){
    const hash = md5(data.name);
    gameId = hash;
    player1 = data.name;
    //console.log('Jogo:', gameId);
    //console.log('Jogador 1:',player1);
  }else if(player2 === ''){
    player2 = data.name;
    //console.log('Jogador 2:',player2);
  }
  switch(data.name) {
    case player1:
      saveGame(gameId,player1,data.message);
      break;
    case player2:
      saveGame(gameId,player2,data.message);
      break;
  }
}

function saveGame(gameId,player,message) {
  log.push({
    'jogo': gameId,
    'player': player,
    'message': message,
  });
  console.log(log);
};
