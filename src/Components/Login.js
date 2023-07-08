import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/Actions';
import '../CSSFiles/Login.css';
const Login = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const [password,setPassword]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      loginUser(username);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Login Here</h2>
    <label>UserName</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
      <button type="submit">Login</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username) => dispatch(loginUser(username)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
