import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const Search = Input.Search;

const MessageInput = (props) => {

  const [inputContent, setInputContent] = useState('');

  const updateInputContent = (e) => {
    setInputContent(e.target.value);
  }

  const sendAndClearInput = (value) => {
    const newMessage = {
      message: value,
    };

    props.onSend(newMessage);
    setInputContent('');
  }
  
  return (
    <Search
      placeholder='Type in your message'
      onSearch={value => sendAndClearInput(value)}
      enterButton={props.enterButton}
      onChange={updateInputContent}
      value={inputContent}
    />
  )
}

MessageInput.propTypes = {
  onSend: PropTypes.func.isRequired,
  enterButton: PropTypes.string.isRequired
};

export default MessageInput;