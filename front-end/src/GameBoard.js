import React, { Component } from 'react';
import MyGameBoard from './MyGameBoard';
import OponentGameBoard from './OponentGameBoard';

class GameBoard extends Component {

  render() {

    return(
      <div className="row">
        <MyGameBoard />
        <OponentGameBoard />
      </div>
    );
  }
}

export default GameBoard;
