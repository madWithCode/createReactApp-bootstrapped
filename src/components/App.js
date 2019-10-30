import React, { Component } from 'react';
import './App.css';
import 'flexboxgrid';
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props.clientData);
    return (
      <div className="App row center-xs">
        <div className="col-xs-8">
          hi
          <button onClick={this.props.saveData}></button>
      </div>
      </div>
    );
  }
}

const save = () => ({
    type: 'SAVE_DATA',
    text: 'Build my first Redux app'
  });

const mapDispatchToProps = dispatch => {
  return {
    saveData: () => { dispatch(save()) }
  }
}


function mapStateToProps(state) {
  return {
    clientData: state.clientData,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);