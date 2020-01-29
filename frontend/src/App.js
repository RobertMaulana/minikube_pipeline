import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    data: ''
  }
  async componentDidMount() {
    const resp = await axios.get("backend-svc:8080/random_number")
    if (resp.status === 200) {
      this.setState({data: resp.data})
    } else {
      this.setState({data: 'unable to fetch API'})
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Stories generator</h2>
        </div>
        <p className="App-intro">
          {this.state.data}
        </p>
      </div>
    );
  }
}

export default App;
