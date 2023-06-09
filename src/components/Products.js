import React, { useEffect , useState } from 'react'
import { add } from '../store/CartSlice';
import { useDispatch , useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
const Products = () => {

  const {data:products ,status}=useSelector(state=>state.product)
  const dispatch = useDispatch()
  const handleAdd =(product)=>{
    // save product in redux store 
    // we dispatch a action and that action calls reducer
    dispatch(add(product));
  }
  // making products state
  // const [products,setProducts]=useState([]);
  // fetching products from api
  useEffect(()=>{
    // const fetchProducts = async()=>{
    //   const response = await fetch('https://fakestoreapi.com/products')
    //   const data = await response.json()
    //   setProducts(data)
    // }
    // fetchProducts()
    dispatch(fetchProducts())
  },[])

  if(status===STATUSES.LOADING){
    return <h2>Loading</h2>
  }else if(status===STATUSES.ERROR){
    return <h2>Oops Error ! 404</h2>
  }
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