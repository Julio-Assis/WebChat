import React, { Component } from 'react';
import MessageInput from '../../components/MessageInput';
import MessageDisplay from '../../components/MessageDisplay';
import { connect } from 'react-redux';
import { IncomingMessageTypes } from '../../redux/modules/incomingMessageModule';

class ChatWindow extends Component {

  sendMessage = (message) => {
    this.props.sendMessage(message);
  }

  render() {
    return (
      <div>
        <MessageDisplay />
        <MessageInput enterButton={"Send"} onSend={this.sendMessage} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => dispatch({
      type: IncomingMessageTypes.RECEIVE_MESSAGE,
      payload: {
        message
      }
    })
  }
}

ChatWindow = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);


export default ChatWindow;
