import React from 'react'
import './page.css'
import { Link,Outlet } from 'react-router-dom'
const Product = () => {
  return (

    
   <div className="page">

    <div>
        <h1>Product Page</h1>
    </div>
      
      <Link className="page" to='/product/men'>Mens</Link>
      <Link className="page" to='/product/women'>Women</Link>
      <Link className="page" to='/product/kids'>Kids</Link>
      <div>
<Outlet />  

      </div>
      
    </div>
  )  
}

export default Product