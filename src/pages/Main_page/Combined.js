import React from 'react'
import { Link } from 'react-router-dom'

function Combined() {
  return (
    <div className="container text-center d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-12 mb-1">
          <h1 className='p-5 text-center'>Welcome to this Page!</h1>
        </div>
        <div className="col-12 mb-3">
          <h2>Check All Users</h2>
          <Link to='/Users'>
            <button type="submit" className="btn btn-primary w-50">Check Users</button>
          </Link>
        </div>
        <div className="col-12">
          <h2>Check My Todo App</h2>
          <Link to='/todos'>
            <button type="submit" className="btn btn-success w-50">Visit Todo App</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Combined
