import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { CogIcon, UserIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import { Categories } from '../../lib/data'



const Sidebar = () => {
  const[categoriesData, setCategoriesData] = useState([])
  const[isDropDownVisible, setIsDropDownVisible] = useState(false)

  const toggleDropDown = () =>{
    setIsDropDownVisible(!isDropDownVisible)
  }
  

  useEffect(() =>{
    setCategoriesData(Categories)
  }, [])

  return (
    <div className='sidebar-container'>
      {/* lists */}
      <div className='sidebar-list'>
        <ul className='sidebar-list_container'>
          <li className='main-list'>Home</li>

          <li className={isDropDownVisible? 'categories-list': 'categories-list categories-hover'} onClick={toggleDropDown}>
            <p className='categories-title'>Categories {isDropDownVisible? <ChevronUpIcon className='arrow-icons' width={20} height={20} /> : <ChevronDownIcon className='arrow-icons' width={20} height={20} />}</p>
            {isDropDownVisible && (
                <ul className='sub-categories'>
                  {categoriesData? categoriesData.map((category, index) => (
                    <li>{category.title}</li>
                  )): ''} 
                </ul>
            )}
           </li>


          <li className='main-list'>Sell</li>
          <li className='main-list'>Contacts Us</li>
          <li className='main-list'>Account</li>
        </ul>
      </div>

      <div className='sidebar-profile'>
        <ul className='sidebar-profile_container'>
          <li><CogIcon className='icon' width={20} height={20} />Settings</li>
          <li><UserIcon className='icon' width={20} height={20} />Sign-in</li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar