import React from 'react';
import { connect } from 'react-redux';
import ChatRoom from './Components/ChatRoom';
import Login from './Components/Login';
import './App.css';

const App = ({ user }) => {
  return <div className="App">{user ? <ChatRoom /> : <Login />}</div>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);

