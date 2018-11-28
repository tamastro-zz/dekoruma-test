import React, { Component } from 'react';
import './App.css';

import Contacts from './components/contacts';
import ChatBox from './components/chatBox';

class App extends Component {
  render() {
    return (
      <div className="App ui grid">
        <div className="ui four wide column area" style={{overflow: 'auto'}}>
          <Contacts />
        </div>
        <div className="ui nine wide column area">
          <ChatBox />
        </div>
        <div className="ui three wide column area" style={{backgroundColor: 'green'}}>

        </div>
      </div>
    );
  }
}

export default App;
