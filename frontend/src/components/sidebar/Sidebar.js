import React, { useContext, useEffect, useState } from 'react'
import './sidebar.css'
import { CogIcon, UserIcon, ChevronDownIcon, ChevronUpIcon, CollectionIcon, HomeIcon, CashIcon, PhoneIcon, UserCircleIcon } from '@heroicons/react/outline'
import { Categories } from '../../lib/data'
import { SidebarContext } from '../../containers/SidebarContext'



const Sidebar = () => {
  const {isSidebarOpen} = useContext(SidebarContext)
  const[categoriesData, setCategoriesData] = useState([])
  const[isDropDownVisible, setIsDropDownVisible] = useState(false)

  const toggleDropDown = () =>{
    setIsDropDownVisible(!isDropDownVisible)
  }
  

  useEffect(() =>{
    setCategoriesData(Categories)
  }, [])

  return (
    <div className='sidebar-container' style={{
      left: isSidebarOpen? '0' : '-280px',
      transition: 'left 0.3s ease'
    }}>
      {/* lists */}
      <div className='sidebar-list'>
        <ul className='sidebar-list_container'>
          <li className='main-list'><HomeIcon className='icon' width={20} height={20} />Home</li>

          <li className={isDropDownVisible? 'categories-list': 'categories-list categories-hover'} onClick={toggleDropDown}>
            <p className='categories-title'><CollectionIcon className='icon' width={20} height={20}/>Categories {isDropDownVisible? <ChevronUpIcon className='arrow-icons' width={20} height={20} /> : <ChevronDownIcon className='arrow-icons' width={20} height={20} />}</p>
            {isDropDownVisible && (
                <ul className='sub-categories'>
                  {categoriesData? categoriesData.map((category, index) => (
                    <li>{category.title}</li>
                  )): ''} 
                </ul>
            )}
           </li>


          <li className='main-list'><CashIcon className='icon' width={20} height={20} />Sell</li>
          <li className='main-list'><PhoneIcon className='icon' width={20} height={20}/>Contacts Us</li>
          <li className='main-list'><UserCircleIcon className='icon' width={20} height={20}/>Account</li>
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