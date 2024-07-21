import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    // Retrieve users from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = storedUsers.map(user => {
      if (user.email === email) {
        return { ...user, password };
      }
      return user;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setMessage('Password updated successfully.');
    
    // Redirect to login page after 2 seconds
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="p-3 d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-4">
            <div className="card p-3 p-lg-4 main-box">
              <h2 className='text-center mb-3 title'>Forget Password</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col mb-2">
                    <label htmlFor="email" className='p-1'>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Enter Your Email'
                      className='form-control'
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-2">
                    <label htmlFor="password" className='p-1'>New Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Enter New Password'
                      className='form-control'
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-2">
                    <label htmlFor="confirmPassword" className='p-1'>Confirm Password:</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder='Confirm Your Password'
                      className='form-control'
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">Update Password</button>
                  </div>
                </div>
                {message && (
                  <div className="row mt-3">
                    <div className="col text-center">
                      <p>{message}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;