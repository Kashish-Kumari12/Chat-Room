import React, { useState } from 'react';
import '../CSSFiles/Register.css';
import {useNavigate} from 'react-router-dom';
const Register = () => {
    let navigate=useNavigate()
  const [username, setUsername] = useState('');
  const [password,setPassword]=useState('');
  const [email, setEmail]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={() => {
        navigate('Login');
      }}>
        <h2>Register Here</h2>
    <label>UserName</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
      <button type="submit">Register</button>
      <h3>if u already have an account </h3><button>Login</button>
    </form>
  );
};
export default Register;