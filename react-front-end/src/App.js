import React, { Component } from 'react';
import Yachts from './components/yachts';

class App extends Component {

  state = {
    yachts: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/yacht')
    .then(res => res.json())
    .then((data) => {
      this.setState({ yachts: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Yachts yachts={this.state.yachts} />
    );
  }
}

export default App;
