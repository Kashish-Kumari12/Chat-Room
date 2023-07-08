import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../redux/Actions';
import '../CSSFiles/MessageInput.css';
const MessageInput = ({ user, addMessage }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      const newMessage = {
        id: new Date().getTime().toString(),
        username: user,
        text: text,
        timestamp: new Date().toLocaleTimeString(),
      };
      addMessage(newMessage);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="messageForm">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter message" className='messageInput'/>
      <button type="submit" className='messageButton'>Send</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => dispatch(addMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
