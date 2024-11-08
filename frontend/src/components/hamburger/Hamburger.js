import React, { useState } from 'react'
import './hamburger.css'

const Hamburger = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }
    
  return (
    <div>
        <button className={`hamburger ${isOpen? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
  )
}

export default Hamburger