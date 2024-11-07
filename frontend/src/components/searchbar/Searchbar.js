import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import './searchbar.css'

const Searchbar = () => {

 const handleSubmit = (e) => {
    e.preventDefualt()
 }
 
  return (
    <div className='searchbar'>
        <form action='' onSubmit={handleSubmit}>
            <input className='searchbar-input' type='text' placeholder='Search Item...'/>
            <button type='submit' className='searchbar-button'> <SearchIcon width={18} height={18} /></button>
        </form>
    </div>
  )
}

export default Searchbar