import React, { useEffect , useState } from 'react'
import { add } from '../store/CartSlice';
import { useDispatch } from 'react-redux';
const Products = () => {

  const dispatch = useDispatch()
  const handleAdd =(product)=>{
    // save product in redux store 
    // we dispatch a action and that action calls reducer
    dispatch(add(product));
  }
  // making products state
  const [products,setProducts]=useState([]);
  // fetching products from api
  useEffect(()=>{
    const fetchProducts = async()=>{
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  },[])
  return (
    <div className='productsWrapper'>
      {
        products.map((product)=>(
          <div className='card' key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={()=>handleAdd(product)} className='btn'>Add to Cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default Products