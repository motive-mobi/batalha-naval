import React, { Component } from 'react';
import Game from './Game.js';

/*class App extends Component {

  render() {
    return (
      <div className="container text-center">
       <div className="row mt-5">
         <div className="col col-md-4 m-auto">
          <h1>Batalha Naval</h1>
          <small><i>O Capitão Lucky II</i></small>
         </div>
       </div>
       <User />
       <Game gameId='012345' name='My mane' />
      </div>
    );
  }
}*/

class App extends Component {

  render() {
    return (
      <div className="container-fluid text-center">
       <div className="row mt-5">
         <div className="col col-md-4 m-auto">
          <h1>Batalha Naval</h1>
          <small><i>O Capitão Lucky II</i></small>
         </div>
       </div>
       <Game />
      </div>
    );
  }
}

export default App;
