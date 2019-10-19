import React from 'react';
import MessageInput from '../../components/MessageInput';
import MessageDisplay from '../../components/MessageDisplay';
import { connect } from 'react-redux';
import { receiveMessage } from '../../redux/modules/incomingMessageModule';
import PropTypes from 'prop-types';

const ChatWindow = (props) => {

  const sendMessage = (message) => {
    
    props.sendMessage({
      ...message,
      userName: props.userName,
    });
  }

  return (
    <div>
      <MessageDisplay />
      <MessageInput enterButton={"Send"} onSend={sendMessage} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.user.userName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => dispatch(receiveMessage(message))
  }
}

ChatWindow.propTypes = {
  userName: PropTypes.string,
  sendMessage: PropTypes.func,
}

const ConnectedChatWindow = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);


export default ConnectedChatWindow;
