import React, {useState} from 'react';
import axios from 'axios';

function RegistrationForm() {
    const [formData, setFormData] =useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name,value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
 
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/register`, formData);
        const token = response.data.token;

        setSuccessMessage(response.data.successMessage);
        setError(null);
        
        } catch (error) {
            setSuccessMessage(null);
            setError(error.response.data.errorMessage)
        }
    
}

return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
    </div>
    <button type="submit">Register</button>
  </form> 

    );
}

export default RegistrationForm;
