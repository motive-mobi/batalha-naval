import React from 'react';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Batalha Naval'
    }
  }
  render() {
    return (
      <div className="container text-center">
       <div className="row">
        <div className="col">
         <Navbar name={this.state.name} />
        </div>
       </div>
      </div>
    );
  }
};

class Navbar extends React.Component {
  /*constructor(props) {
    super(props);
  }*/
  render() {
    return (
    <div>
      <h1>Bem vindo ao {this.props.name} </h1>
    </div>
    );
  }
};

export default MyApp;
