import React, { Component } from 'react';
// import { Provider } from 'react-redux'
import {Message} from 'react-chat-ui'

import './App.css';
import config from './config'
// import store from './store'

import Contacts from './components/contacts';
import ChatBox from './components/chatBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      contactChoosen: 0
    }
    this.pushChat = this.pushChat.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
  }

  async componentDidMount () {
    await this.setState({
      message: config
    })
  }
  
  pushChat(chatIndex, chat) {
    if (chat === '') {
      return;
    }
    
    const newMessage = [ ...this.state.message ];
    newMessage[chatIndex].chat.push(new Message({
      id: 0,
      message: chat
    }))

    this.setState({
      message: newMessage
    })
  }

  onChangeContact(id) {
    this.setState({
      contactChoosen: id
    })
  }

  render() {
    return (
      <div className="App ui grid">
        <div className="ui four wide column area">
          <Contacts onChangeContact={this.onChangeContact} data={this.state.message} />
        </div>
        <div className="ui twelve wide column area chat-box">
          <ChatBox message={this.state.message} contact={this.state.contactChoosen} inputChat={this.pushChat} />
        </div>
      </div>
    );
  }
}

export default App;
