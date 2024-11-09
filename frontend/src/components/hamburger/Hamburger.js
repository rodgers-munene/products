import React, { useContext } from 'react'
import './hamburger.css'
import { SidebarContext } from '../../containers/SidebarContext'

const Hamburger = () => {
    const {isSidebarOpen,  toggleSidebar } = useContext(SidebarContext)

    
  return (
    <div>
        <button className={`hamburger ${isSidebarOpen? 'open' : ''}`} onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
  )
}

export default Hamburger