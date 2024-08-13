import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { logout } from '../../firebase'

function Navbar() {
  const navRef=useRef()
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')}
        else{navRef.current.classList.remove('nav-dark')}
    })
  },[])
  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src="netflix_logo.png" alt="logo" className='logo'/>
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Language</li>
            </ul>
        </div>
        <div className="navbar-right">
          <img src="search.webp" alt="search" className='icons' />
          <p>Children</p>
          <img src="bell.png" alt="" className='icon-bell'/>
          <div className="navbar-profile">
            <img src="profile.jpg" alt="profile" className="profile-icon" />
            <img src="caret.webp" alt="" className='icons' />
            <div className="dropdown">
              <p onClick={()=>{logout()}}>Sign Out from Netflix</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar
