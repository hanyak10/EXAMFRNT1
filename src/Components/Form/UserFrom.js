import React, { useState } from 'react';
import './UserForm.css';
const UserForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    profile: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., send data to API
    console.log(formData);
    // Clear form fields if needed
    alert('submit');
    setFormData({
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      profile: ''
    });
  };
  const handleClearForm = () => {
    setFormData({
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      profile: ''
    });
  };

  return (
    <div className='container'>
  
      <form onSubmit={handleSubmit}>
      <h3>Register Here</h3>
      <div>
        <input 
          type="text" 
          name="username" 
          placeholder='Username'
          value={formData.username} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <input 
          type="password" 
          name="password" 
            placeholder='Password'
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>

        <input 
          type="text" 
          name="firstname" 
            placeholder='Firstname'
          value={formData.firstname} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>

        <input 
          type="text" 
          name="lastname" 
            placeholder='Lastname'
          value={formData.lastname} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <input 
          type="email" 
          name="email" 
            placeholder='Email'
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <input 
          type="tel" 
          name="phone" 
            placeholder='Phone'
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />
      </div>

     <div className='btn'>
      <button className="btns" type="submit">Submit</button>
      <button className="btnr" onClick={handleClearForm} type="reset">Reset</button>
     </div>
    </form>

    </div>
  );
};

export default UserForm;
