import React from 'react'
import './sidebar.css'
import { CogIcon, UserIcon } from '@heroicons/react/outline'



const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      {/* lists */}
      <div className='sidebar-list'>
        <ul className='sidebar-list_container'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Categories</a></li>
          <li><a href='#'>Sell</a></li>
          <li><a href='#'>Contacts Us</a></li>
          <li><a href='#'>Account</a></li>
        </ul>
      </div>

      <div className='sidebar-profile'>
        <ul className='sidebar-profile_container'>
          <li><a href='#'><CogIcon className='icon' width={20} height={20} />Settings</a></li>
          <li><a href='#'><UserIcon className='icon' width={20} height={20} />Sign-in</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar