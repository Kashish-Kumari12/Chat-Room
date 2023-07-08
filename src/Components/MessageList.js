import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage } from '../redux/Actions';
import '../CSSFiles/MessageList.css'
import { FaTrash } from 'react-icons/fa';
const MessageList = ({ messages, deleteMessage }) => {
  return (
    <>
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          <span className='spanUser'>{message.username}</span>
          <span className='spanTime'>{message.timestamp}</span>
          <br></br>
          <span>{message.text}</span>
          <button onClick={() => deleteMessage(message.id)} className='deleteButton'><FaTrash/></button>
        </li>
      ))}
    </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

