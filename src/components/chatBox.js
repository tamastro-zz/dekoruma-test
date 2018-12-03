import React, {useState} from 'react';
import { ChatFeed } from 'react-chat-ui'
import '../App.css';

const ChatBox = (props) => {
  const [chat, setChat] = useState('');
  const [showDetail, setDetail] = useState(false);

  const handleChatSubmit = async () => {
    await props.inputChat(props.contact, chat)

    setChat('')
  }

  return (
    <div className={showDetail ? "chat-wrapper" : "chat-wrapper-full"}>
      <div className="chat-header">
        <h3 className="ui top attached header">
          {props.message.length === 0 ? '' : props.message[props.contact].name}
          <i className="details info circle icon" onClick={() => setDetail(!showDetail)}></i>
        </h3>
      </div>
      <div className="chat-display">
        <ChatFeed
          messages={props.message.length === 0 ? [] : props.message[props.contact].chat} // Boolean: list of message objects
          hasInputField={false} // Boolean: use our input, or use your own
          showSenderName // show the name of the user who sent the message
          bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
          maxHeight={(window.innerHeight - 140)}
          // JSON: Custom bubble styles
          bubbleStyles={
            {
              text: {
                fontSize: 18
              },
              chatbubble: {
                borderRadius: 10,
                padding: 10,
                maxWidth: 500
                    }
            }
          }
        />
      </div>
      <div className="chat-detail">
        <h3 class="ui top attached header">
          <div className="item" key={props.message.length === 0 ? '' : props.message[props.contact].id}>
            <img className="ui avatar image" src={props.message.length === 0 ? '' : props.message[props.contact].avatar} alt="avatar" />
            <div className="content">
              <div className="header">{props.message.length === 0 ? '' : props.message[props.contact].name}</div>
            </div>
          </div>
        </h3>
        <div class="ui attached segment detail-content">
          <p></p>
        </div>
      </div>
      <div className="chat-input">
        <div className="ui action focus fluid input">
          <input type="text" placeholder="Enter your Chat..." value={chat} onChange={(e) => setChat(e.target.value)} onKeyPress={(e) => e.key === 'Enter' ? handleChatSubmit() : ''} />
          <button className="ui blue button" onClick={() => handleChatSubmit()}>Send</button>
        </div>
      </div>
    </div>
  )
};

export default ChatBox;
