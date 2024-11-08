import React from 'react'
import './navbar.css'
import Searchbar from '../searchbar/Searchbar'
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/solid'

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='logo-div'>
        <h1> PickiFy</h1>
       </div>
       <div className='searchbar-div'>
          <Searchbar />
       </div>
       <div className='navbar-buttons'>
          <button><ShoppingCartIcon width={25}  height={23}/></button>
          <button><UserIcon width={25} height={23} className='user-icon'/></button>
          {/* <button></button> */}
       </div>
    </div>
  )
}

export default Navbar