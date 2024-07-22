import './Login.css';
import animation from '../../assets/images.jfif'
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send the credentials to the server
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
 
    <div className='login-container'>

   <form className='login-form' onSubmit={handleSubmit}>
   <img alt='Logo' src={animation}/>
        <h1>LOGIN HERE!!</h1>
      <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder='Username *'
          required
        />
      <input
          type="password"
          placeholder='Password *'
          value={password}
          onChange={handlePasswordChange}
          required
        />
      <div className='btn'>
      <button className="btns" type="submit">Submit</button>
      <button className="btnr"  type="reset">Reset</button>
     </div>
    </form>
    </div>
  );
};

export default LoginForm;
