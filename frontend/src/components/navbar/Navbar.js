import React from 'react'
import './navbar.css'
import Searchbar from '../searchbar/Searchbar'

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='logo-div'>
        Logo
       </div>
       <div className='searchbar-div'>
          <Searchbar />
       </div>
       <div className='navbar-buttons'>
          NavBar buttons
       </div>
    </div>
  )
}

export default Navbar