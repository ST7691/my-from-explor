import React, { useState } from 'react'
import Productform from './Productform'
import Producttable from './Producttable'

const Productmanagement = () => {

    const [products, setProducts]= useState([]);

    const handleAddProduct = newProduct=>{
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    }
  return (
    <div>
        <h1>Product management</h1>
        <Productform handleAddProduct={handleAddProduct}></Productform>
        <Producttable products={products}></Producttable>
    </div>
  )
}

export default Productmanagement