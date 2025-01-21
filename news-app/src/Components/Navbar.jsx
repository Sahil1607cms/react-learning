import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary data-bs-theme='dark'">
  <div className="container-fluid">
    <a className="navbar-brand badge bg-dark text-light fs-4" href="#">NewsTV</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
        <li className="nav-item cursor-pointer">
          <a className="nav-link active" aria-current="page" onClick={()=>{setCategory("BUSINESS") }} >BUSINESS</a>
        </li>
        <li className="nav-item cursor-pointer">
        <a className="nav-link active" aria-current="page"  onClick={()=>{setCategory("HEALTH") }} >HEALTH</a>
        </li>
        <li className="nav-item cursor-pointer">
          <a className="nav-link active" aria-current="page"  onClick={()=>{setCategory("SPORTS") }} >SPORTS</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
