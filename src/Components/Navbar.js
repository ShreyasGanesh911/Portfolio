import React from 'react'
import '../Css/navbar.css'
import logo from'../WebLogo.jpeg'


export default function Navbar() {
  return (
    <>
     <nav className="navbar fixed-top navbar-expand-lg  bg-black">
  <div className="container-fluid  my-3 nav-div" >
  <a className="navbar-brand text-white displayFlex" href="#home">
      <img src={logo} alt="Logo" style={{width:"60px" }} className="d-inline-block align-text-top"/>
      
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-listing" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mx-3">
          <a className="nav-link  text-white " aria-current="page" href="#about ">About</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link text-white " href="#skillset">Skill Set</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link text-white " href="#portfolio">Projects</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link text-white" href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    </>
  )
}
