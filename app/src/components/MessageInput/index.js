import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const Search = Input.Search;

class MessageInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputContent: ''
    };
  }

  updateInputContent = (e) => {
    this.setState({
      inputContent: e.target.value
    });
  }

  sendAndClearInput = (value) => {
    const newMessage = {
      title: "User Blah",
      message: value,
    };

    this.props.onSend(newMessage);
    this.setState({
      inputContent: ''
    });
  }

  render() {
    return (
      <Search
        placeholder='Type in your message'
        onSearch={value => this.sendAndClearInput(value)}
        enterButton={this.props.enterButton}
        onChange={this.updateInputContent}
        value={this.state.inputContent}
      />
    )
  }
}

MessageInput.propTypes = {
  onSend: PropTypes.func.isRequired,
  enterButton: PropTypes.string.isRequired
};

export default MessageInput;