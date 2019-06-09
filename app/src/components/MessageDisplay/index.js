import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  List,
  Avatar,
} from 'antd';

class MessageDisplay extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.lastMessage !== nextProps.lastMessage) {
      this.updateMessages(nextProps.lastMessage);
    }
  }

  updateMessages = (newMessage) => {
    if (this.state.messages.length === 30) {
      this.setState({
        messages: this.state.messages.slice(1)
      });
    }
    this.setState({
      messages: this.state.messages.concat([newMessage])
    });
  }


  render() {
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={this.state.messages}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.message}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

MessageDisplay.propTypes = {
  lastMessage: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    lastMessage: state.incomingMessage.lastMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

MessageDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageDisplay);

export default MessageDisplay;
