import React from 'react';
import axios from 'axios';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameReady: 'false',
      value: '',
      gameId: null,
      player1: null,
      player2: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let data = this.state.value;
    axios.post('http://localhost:3001/api/v1/players', {
      nickname: data,
    })
      //.then(response => console.log(response))
      .then(response =>
        this.setState({
          gameReady: response.data.gameReady,
          gameId: response.data.gameId,
          player1: response.data.players.jogador1,
          player2: response.data.players.jogador2,
        })
      )
      .catch(error => console.log(error))

      event.preventDefault();
  }

  render() {
    console.log(this.state.gameId);
    console.log(this.state.player1);
    console.log(this.state.player2);
    console.log(this.state.gameReady);

    if(this.state.gameReady === 'false'){
      return (
        <div className="container text-center">
        <h1>Batalha Naval - O Capitão Lucky II</h1>
         <div className="row mt-5">
           <div className="col col-md-4 m-auto">
             <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                 <label htmlFor="inputNickName">Seu nick</label>
                 <input type="text" className="form-control" id="inputNickName" aria-describedby="inputNickNameHelp" placeholder="Informe seu nickname" value={this.state.value} onChange={this.handleChange}/>
               </div>
               <button type="submit" className="btn btn-primary">Vamos lá!</button>
             </form>
           </div>
         </div>
         {/*<div className="row mt-2">
          <div className="col">
           <GameTab gameId={this.state.gameId} player1={this.state.player1} player2={this.state.player2} />
          </div>
         </div>*/}
        </div>
      );
    }else{
      return (
        <div className="container text-center">
        <h1>Batalha Naval - O Capitão Lucky II</h1>
         {/*<div className="row mt-5">
           <div className="col col-md-4 m-auto">
             <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                 <label htmlFor="inputNickName">Seu nick</label>
                 <input type="text" className="form-control" id="inputNickName" aria-describedby="inputNickNameHelp" placeholder="Informe seu nickname" value={this.state.value} onChange={this.handleChange}/>
               </div>
               <button type="submit" className="btn btn-primary">Vamos lá!</button>
             </form>
           </div>
         </div>*/}
         <div className="row mt-2">
          <div className="col">
           <GameTab gameId={this.state.gameId} player1={this.state.player1} player2={this.state.player2} />
          </div>
         </div>
        </div>
      );
    }

  }
};

class GameTab extends React.Component {
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
