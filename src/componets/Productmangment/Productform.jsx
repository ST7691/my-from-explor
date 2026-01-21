import React, { useState } from 'react'

const Productform = ({handleAddProduct}) => {
 
const [error, seterror] = useState('')
const handleProductSubmit = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // validation error set
    if(name.length===0){
      seterror('please prodie the product name');
      return;
    }
    else if(price<0){
        seterror('please provide the price ');
        return;
    }
    else if (quantity<0){
        seterror('please provide the quantity');
        return;
    }
else{
    seterror('')
}
    // console.log(name,price,quantity)
    const newProduct = {
        name,
        price,
        quantity
    }
    // console.log(newProduct)
    handleAddProduct(newProduct);
}
  return (
    <div>
       <form onSubmit={handleProductSubmit} >
        <input type="text" name="name"  placeholder='product name' />
        <br />
        <input type="text" name="price"  placeholder='product price' />
        <br />
        <input type="text" name="quantity"  placeholder='product quantity' />
        <br />
        <input type="submit" value="submit" />
       </form>
       <p style={{color:'red'}}>
        <small>{error}</small>
       </p>
    </div>
  )
}

export default Productform