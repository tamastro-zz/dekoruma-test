import React from 'react';
import { ChatFeed, Message } from 'react-chat-ui'

const ChatBox = (props) => {
  return (
    <ChatFeed
      messages={[new Message({
      id: 1,
      message: "I'm the recipient! (The person you're talking to)",
      senderName: 'Elon'
    }),new Message({
      id: 1,
      message: "I'm the recipient! (The person you're talking to)",
      senderName: 'Elon'
    }),new Message({
      id: 0,
      message: "I'm the recipient! (The person you're talking to)",
    })]} // Boolean: list of message objects
      hasInputField={true} // Boolean: use our input, or use your own
      showSenderName // show the name of the user who sent the message
      bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
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
  )
};

export default ChatBox;
