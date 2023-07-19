import React from 'react'
import { Link } from 'react-router-dom'
import './Styling.css'
export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link className="navbar-brand" to='/'> SHOPTRONIC</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to='/'>Home</Link> 
      </li>
      <li className="nav-item">
      <Link to='/products' >Products</Link> 
      </li>
      <li className="nav-item">
          <Link to='/update'> Update </Link> 
        </li>
        <li className="nav-item">
          <Link to='/profile'>Profile</Link> 
        </li>

    </ul>
    
    <button className='btn-purple mx-4'> <Link to='signup' >SignUp</Link> </button> 
    <button className='btn-purple'>LogOut</button>
  </div>
</nav>
    </>
  )
}
