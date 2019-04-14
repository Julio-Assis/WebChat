import React, { Component } from 'react';
import MessageInput from '../../components/MessageInput';

class ChatWindow extends Component {


  sendMessage = (message) => {
    console.log(message);
  }

  render() {
    return (
      <div>

        {/* <ConnectedUsersDisplay /> */}
        <MessageDisplay />
        <MessageInput enterButton={"Send"} onSend={this.sendMessage}/>
      </div>
    );
  }
}

export default ChatWindow;
