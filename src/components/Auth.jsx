import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      const existingUser = JSON.parse(localStorage.getItem(formData.email));
      if (existingUser) {
        alert('User already exists');
      } else {
        localStorage.setItem(formData.email, JSON.stringify(formData));
        navigate('/local-storage');
      }
    } else {
      const user = JSON.parse(localStorage.getItem(formData.email));
      if (user && user.password === formData.password) {
        navigate('/local-storage');
      } else {
        alert('Invalid credentials');
      }
    }
  };

  return (
    <div className="form-container">
      <h2>{isSignup ? 'Signup' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              required
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
      </form>
      <button className="toggle-btn" onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? 'Already have an account? Login' : "Don't have an account? Signup"}
      </button>
    </div>
  );
};

export default Auth;