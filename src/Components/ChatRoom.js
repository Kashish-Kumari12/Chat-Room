import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/Actions';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

import '../CSSFiles/ChatRoom.css'
const ChatRoom = ({ user, logoutUser }) => {
  return (
    <div className='container'>
    <div className='classOne'>
      <h2>Welcome, {user} <button onClick={logoutUser} className='LogOut'>Logout</button></h2>
    <MessageList />
      <MessageInput />
      
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);


