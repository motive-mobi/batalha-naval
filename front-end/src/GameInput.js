import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    const inputStyles = {
      maxWidth: '300px',
      margin: 'auto',
    };

    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <input
          className="form-control"
          style={inputStyles}
          type="text"
          placeholder={'Aqui serão registradas as jogadas...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        <input className="btn btn-primary mt-2 mb-2" type="submit" value={'Jogar!'} />
      </form>
    )
  }
}

export default GameInput
