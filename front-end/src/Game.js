import React, { Component } from 'react';
//import GameInput from './GameInput'
//import GameMessage from './GameMessage'
import GameBoard from './GameBoard';

//const URL = 'ws://localhost:3030'

class Game extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      name: '',
      messages: [],
    }
  }*/
  /*state = {
    online: false,
    name: '',
    messages: [],
  }*/

  //ws = new WebSocket(URL)

  /*componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    }

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      this.addMessage(message)
    }

    this.ws.onclose = () => {
      console.log('disconnected');
      console.log(this.ws.readyState);
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }

  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }*/

  render() {

    return (
      <div className="row mt-5">
        <div className="col m-auto">
          {/*<div className="form-group">*/}
            {/*<label htmlFor="name">
              Nickname
              <input
                className="form-control"
                type="text"
                id={'name'}
                placeholder={'Seu nick...'}
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </label>*/}
            {/*<GameInput
              ws={this.ws}
              onSubmitMessage={messageString => this.submitMessage(messageString)}
            />*/}
            {/*{this.state.messages.map((message, index) =>
              <GameMessage
                key={index}
                message={message.message}
                name={message.name}
              />,
            )}*/}
            <GameBoard />
          {/*</div>*/}
        </div>
      </div>
    )
  }
}

export default Game
