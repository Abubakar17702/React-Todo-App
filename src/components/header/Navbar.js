import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link to='/' className="navbar-brand">Abubakar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Register</Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" className="nav-link active">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/ForgotPassword" className="nav-link active">Forget Password</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}