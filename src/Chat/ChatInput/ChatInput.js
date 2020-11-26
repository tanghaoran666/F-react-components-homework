import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputMessage: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      inputMessage: event.target.value,
    });
  };

  addChatMessage = () => {
    this.props.inputMessage(this.state.inputMessage);
    this.setState({
      inputMessage: '',
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.handleChange} value={this.state.inputMessage} />
        <button type="button" onClick={this.addChatMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
