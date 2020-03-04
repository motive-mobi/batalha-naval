import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {

  render() {
    return (
      <div className="row mt-5">
        <div className="col col-md-4 m-auto">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              {/*<label htmlFor="inputNickName">Seu nick</label>*/}
              <input type="text" className="form-control" id="inputNickName" aria-describedby="inputNickNameHelp" placeholder="Informe seu nickname" />
            </div>
            <button type="submit" className="btn btn-primary">Vamos lá!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default User;
