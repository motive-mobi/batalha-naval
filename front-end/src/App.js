import React from 'react';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: 'jhsdfsdfdfgsjdfgsdjgh',
      player1: 'Xande',
      player2: 'Lucca'
    }
  }
  render() {
    return (
      <div className="container text-center">
      <h1>Batalha Naval - O Capitão Lucky II</h1>
       <div className="row mt-5">
         <div className="col col-md-4 m-auto">
           <form id="gameForm">
             <div className="form-group">
               <label htmlFor="inputNickName">Seu nick</label>
               <input name="nickname" type="text" className="form-control" id="inputNickName" aria-describedby="inputNickNameHelp" placeholder="Informe seu nickname"/>
             </div>
             <button id="enterGame" type="button" className="btn btn-primary">Vamos lá!</button>
           </form>
         </div>
       </div>
       <div className="row mt-2">
        <div className="col">
         <Gametab  gameId={this.state.gameId} player1={this.state.player1} player2={this.state.player2} />
        </div>
       </div>
      </div>
    );
  }
};

class Gametab extends React.Component {
  /*constructor(props) {
    super(props);
  }*/
  render() {
    return (
    <div>
      <div className="row mt-5">
        <div className="col-12">
          <strong>Game ID:</strong> {this.props.gameId}
        </div>
        <div className="col-12 col-md-6 mt-2">
          <p>Jogador: <strong>{this.props.player1}</strong></p>
        </div>
        <div className="col-12 col-md-6 mt-2">
          <p>Jogador: <strong>{this.props.player2}</strong></p>
        </div>
      </div>
    </div>
    );
  }
};

export default MyApp;
