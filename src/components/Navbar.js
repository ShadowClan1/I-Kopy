import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
export default function Navbar() {
  let location = useLocation()
  
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand"  to="/">iKOPY</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link   className={`nav-link  ${location.pathname === "/" ? "active": ""}`} aria-current="page"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname === "/about" ? "active": ""}`} to="/about">About</Link>
        </li>
        
       
 
        
       
      </ul>
      {(!localStorage.getItem('token')) && (<Link className='btn btn-primary mx-1 ' to='/login' ><i class="fa-solid fa-rocket"></i>
</Link>)}
      {!localStorage.getItem('token') &&<Link className='btn btn-primary  mx-1'  to='/signup'><i class="fa-solid fa-user-plus"></i>
</Link>}
      {localStorage.getItem('token') &&<Link className=' mx-1' to='/login' onClick={()=>{localStorage.clear();
      }}  ><i class="fa-solid fa-right-to-bracket"></i>
</Link>}
    </div>
  </div>
</nav>
    </div>
  )
}
