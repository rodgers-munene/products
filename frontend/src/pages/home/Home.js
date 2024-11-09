import React, { useContext, useEffect, useState } from 'react'
import FetchProducts from '../../lib/data'
import './home.css'
import { SidebarContext } from '../../containers/SidebarContext'

const Home = () => {
  const [products, setProducts] = useState([])
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext)
  

  useEffect(() =>{
    const fetchData = async () =>{
      const data = await FetchProducts()
      setProducts(data)
    }
    if(isSidebarOpen){
      document.body.style.overflowY = 'hidden'
    }else{
      document.body.style.overflowY = 'auto'
    }

    return () => { 
      
      fetchData()
    }
    
  },[isSidebarOpen])

  const handleToggle = () =>{
    if(isSidebarOpen){
      toggleSidebar()
    }
  }


  return (
    <div className={`home-container ${isSidebarOpen? 'home-container_blur':''}`} onClick={handleToggle} >
      {products && products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="product-div" >

            <div className='image-div'>

              <img src={product.image_link} alt={product.title} width={100} height={100}></img>
              
              <p className='product-title'>{product.title}</p>
           
            </div>
        
         </div>
        ))
      ): (
        <div> Loading...</div>
      )}
    </div>
  )
}

export default Home