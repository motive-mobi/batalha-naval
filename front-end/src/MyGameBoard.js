import React, { Component } from 'react';
import md5 from 'md5';

class MyGameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerId: '',
      player1Items: [],
      player1Status: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    console.log('handleclick playeritems:',this.state.player1Items);
    const newItem = e.target.dataset.value;
    this.setState(prevState => ({
      player1Items: [...prevState.player1Items, newItem]
    }));
    e.target.style.backgroundColor = "#2F203D";
    this.handleChange();
  }

  handleChange() {
    if(this.state.playerId === ''){
      this.setState({
        playerId: md5(new Date().toLocaleString()),
      });
    }

    //if(this.state.player1Items.length !== 0) {
      this.setState({
        player1Status: true,
      });

      this.props.onSubmitMessage({
        playerId: this.state.playerId,
        itemsPosition: this.state.player1Items,
      });
    //}
  }

  render() {
    //console.log('prop player1Items:',this.state.player1Items);
    //console.log('prop player1Status:',this.state.player1Status);
    console.log('prop playerId:',this.state.playerId);
    return(
        <div className="col-12 col-md-6">
          {(this.state.player1Items.length < 4) ? <p>Você <span className="badge badge-danger">Preparando...</span></p> : <p>Você <span className="badge badge-success">Pronto</span></p>}
          <div id="board-1">
            <table className = 'grid'>
              <tbody>
                <tr>
                  <td onClick={this.handleClick} data-value="1"></td>
                  <td onClick={this.handleClick} data-value="2"></td>
                  <td onClick={this.handleClick} data-value="3"></td>
                  <td onClick={this.handleClick} data-value="4"></td>
                  <td onClick={this.handleClick} data-value="5"></td>
                  <td onClick={this.handleClick} data-value="6"></td>
                  <td onClick={this.handleClick} data-value="7"></td>
                  <td onClick={this.handleClick} data-value="8"></td>
                  <td onClick={this.handleClick} data-value="9"></td>
                  <td onClick={this.handleClick} data-value="10"></td>
                </tr>
                <tr>
                  <td onClick={this.handleClick} data-value="11"></td>
                  <td onClick={this.handleClick} data-value="12"></td>
                  <td onClick={this.handleClick} data-value="13"></td>
                  <td onClick={this.handleClick} data-value="14"></td>
                  <td onClick={this.handleClick} data-value="15"></td>
                  <td onClick={this.handleClick} data-value="16"></td>
                  <td onClick={this.handleClick} data-value="17"></td>
                  <td onClick={this.handleClick} data-value="18"></td>
                  <td onClick={this.handleClick} data-value="19"></td>
                  <td onClick={this.handleClick} data-value="20"></td>
                </tr>
                <tr>
                  <td onClick={this.handleClick} data-value="21"></td>
                  <td onClick={this.handleClick} data-value="22"></td>
                  <td onClick={this.handleClick} data-value="23"></td>
                  <td onClick={this.handleClick} data-value="24"></td>
                  <td onClick={this.handleClick} data-value="25"></td>
                  <td onClick={this.handleClick} data-value="26"></td>
                  <td onClick={this.handleClick} data-value="27"></td>
                  <td onClick={this.handleClick} data-value="28"></td>
                  <td onClick={this.handleClick} data-value="29"></td>
                  <td onClick={this.handleClick} data-value="30"></td>
                </tr>
                <tr>
                  <td onClick={this.handleClick} data-value="31"></td>
                  <td onClick={this.handleClick} data-value="32"></td>
                  <td onClick={this.handleClick} data-value="33"></td>
                  <td onClick={this.handleClick} data-value="34"></td>
                  <td onClick={this.handleClick} data-value="35"></td>
                  <td onClick={this.handleClick} data-value="36"></td>
                  <td onClick={this.handleClick} data-value="37"></td>
                  <td onClick={this.handleClick} data-value="38"></td>
                  <td onClick={this.handleClick} data-value="39"></td>
                  <td onClick={this.handleClick} data-value="40"></td>
                </tr>
                <tr>
                  <td onClick={this.handleClick} data-value="41"></td>
                  <td onClick={this.handleClick} data-value="42"></td>
                  <td onClick={this.handleClick} data-value="43"></td>
                  <td onClick={this.handleClick} data-value="44"></td>
                  <td onClick={this.handleClick} data-value="45"></td>
                  <td onClick={this.handleClick} data-value="46"></td>
                  <td onClick={this.handleClick} data-value="47"></td>
                  <td onClick={this.handleClick} data-value="48"></td>
                  <td onClick={this.handleClick} data-value="49"></td>
                  <td onClick={this.handleClick} data-value="50"></td>
                </tr>
                <tr>
                  <td onClick={this.handleClick} data-value="51"></td>
                  <td onClick={this.handleClick} data-value="52"></td>
                  <td onClick={this.handleClick} data-value="53"></td>
                  <td onClick={this.handleClick} data-value="54"></td>
                  <td onClick={this.handleClick} data-value="55"></td>
                  <td onClick={this.handleClick} data-value="56"></td>
                  <td onClick={this.handleClick} data-value="57"></td>
                  <td onClick={this.handleClick} data-value="58"></td>
                  <td onClick={this.handleClick} data-value="59"></td>
                  <td onClick={this.handleClick} data-value="60"></td>
                </tr>
                <tr>
                  <td onClick={this.handleClick} data-value="61"></td>
                  <td onClick={this.handleClick} data-value="62"></td>
                  <td onClick={this.handleClick} data-value="63"></td>
                  <td onClick={this.handleClick} data-value="64"></td>
                  <td onClick={this.handleClick} data-value="65"></td>
                  <td onClick={this.handleClick} data-value="66"></td>
                  <td onClick={this.handleClick} data-value="67"></td>
                  <td onClick={this.handleClick} data-value="68"></td>
                  <td onClick={this.handleClick} data-value="69"></td>
                  <td onClick={this.handleClick} data-value="70"></td>
                </tr>
                <tr>
                  <td onClick={this.handleClick} data-value="71"></td>
                  <td onClick={this.handleClick} data-value="72"></td>
                  <td onClick={this.handleClick} data-value="73"></td>
                  <td onClick={this.handleClick} data-value="74"></td>
                  <td onClick={this.handleClick} data-value="75"></td>
                  <td onClick={this.handleClick} data-value="76"></td>
                  <td onClick={this.handleClick} data-value="77"></td>
                  <td onClick={this.handleClick} data-value="78"></td>
                  <td onClick={this.handleClick} data-value="79"></td>
                  <td onClick={this.handleClick} data-value="80"></td>
                </tr>
                <tr>
                  <td onClick={this.handleClick} data-value="81"></td>
                  <td onClick={this.handleClick} data-value="82"></td>
                  <td onClick={this.handleClick} data-value="83"></td>
                  <td onClick={this.handleClick} data-value="84"></td>
                  <td onClick={this.handleClick} data-value="85"></td>
                  <td onClick={this.handleClick} data-value="86"></td>
                  <td onClick={this.handleClick} data-value="87"></td>
                  <td onClick={this.handleClick} data-value="88"></td>
                  <td onClick={this.handleClick} data-value="89"></td>
                  <td onClick={this.handleClick} data-value="90"></td>
                </tr>
                <tr>
                  <td onClick={this.handleClick} data-value="91"></td>
                  <td onClick={this.handleClick} data-value="92"></td>
                  <td onClick={this.handleClick} data-value="93"></td>
                  <td onClick={this.handleClick} data-value="94"></td>
                  <td onClick={this.handleClick} data-value="95"></td>
                  <td onClick={this.handleClick} data-value="96"></td>
                  <td onClick={this.handleClick} data-value="97"></td>
                  <td onClick={this.handleClick} data-value="98"></td>
                  <td onClick={this.handleClick} data-value="99"></td>
                  <td onClick={this.handleClick} data-value="100"></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*<button className="btn btn-primary" onClick={this.handleClick}>Vamos lá</button>*/}
        </div>
    );
  }

}


export default MyGameBoard;
