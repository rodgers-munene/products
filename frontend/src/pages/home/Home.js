import React, { useEffect, useState } from 'react'
import FetchProducts from '../../lib/data'
import './home.css'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    const fetchData = async () =>{
      const data = await FetchProducts()
      setProducts(data)
    }

    fetchData()
  },[])
  return (
    <div className='home-container'>
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className='product-div'>

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