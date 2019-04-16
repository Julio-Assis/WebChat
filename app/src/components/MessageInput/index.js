import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const Search = Input.Search;

const MessageInput = (props) => {
  return (
    <Search
      placeholder='Type in your message'
      onSearch={value => props.onSend(value)}
      enterButton={props.enterButton}
    />
  )
};

MessageInput.propTypes = {
  onSend: PropTypes.func.isRequired,
  enterButton: PropTypes.string.isRequired
};

export default MessageInput;