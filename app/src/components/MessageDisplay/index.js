import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MessageDisplay extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  

  render() {
    return (
      <div>

      </div>
    );
  }
}

MessageDisplay.propTypes = {

}

const mapStateToProps = (state) => {
  return {
    lastMessage: state.lastMessage
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