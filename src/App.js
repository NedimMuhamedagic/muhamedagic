import React, { Component } from 'react';
// TODO: [@nmuhamedagic]: Add a proper router
import Home from './routes/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
