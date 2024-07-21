import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push(input);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    navigate('/login');
  };

  return (
    <>
      <div className="p-3 d-flex justify-content-center align-items-center vh-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-4">
              <div className="card p-3 p-lg-4 main-box">
                <h2 className='text-center mb-3 title'>Register</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col mb-2">
                      <label htmlFor="name" className='p-1'>Your Name:</label>
                      <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        placeholder='Enter Your Full Name'
                        className='form-control'
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-2">
                      <label htmlFor="email" className='p-1'>Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        placeholder='Enter Your Email'
                        className='form-control'
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-2">
                      <label htmlFor="password" className='p-1'>Password:</label>
                      <input
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        placeholder='Enter Your Password'
                        className='form-control'
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button type="submit" className="btn btn-success w-100">Register</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-center">
                      <p className='mt-4 mb-2'>Already have an Account?</p>
                      <Link to='/login'>
                        <button type="button" className="btn btn-primary w-50">Login</button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
