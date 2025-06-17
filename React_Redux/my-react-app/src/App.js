import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from './redux/actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    })
  }

  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: "",
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
          <input onChange={this.handleChange} value={this.state.input}></input>
          <button onClick={this.submitMessage}></button>
          <ul>
            {this.props.messages.map((message, idx) => {
              return <li key={idx}>{message}</li>
            })}
          </ul>
      </div>
    );
  }
};

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    messages: state // Your state is directly the array of messages
  };
};

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message)); // Dispatch the addMessage action
    }
  };
};

// Connect your component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);


