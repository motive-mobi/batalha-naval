import React, { Component } from 'react';
import MyGameBoard from './MyGameBoard';
import OponentGameBoard from './OponentGameBoard';

const URL = 'ws://localhost:3030';

class GameBoard extends Component {

  ws = new WebSocket(URL)

  componentDidMount() {
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
  }

  render() {

    return(
      <div className="row">
        <MyGameBoard ws={this.ws} onSubmitMessage={messageString => this.submitMessage(messageString)} />
        <OponentGameBoard />
      </div>
    );
  }
}

export default GameBoard;
