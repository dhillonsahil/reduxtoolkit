import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/CartSlice';
const Cart = () => {
  const dispatch=useDispatch();
  const handleRemove =(productId)=>{
    dispatch(remove(productId))
  }
  const items=useSelector((state)=>state.cart)
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
        items.map((item)=>(
          <div className='cartCard' key={item.id}>
            <img src={item.image} alt="" />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button onClick={()=>handleRemove(item.id)} className='btn'>Remove</button>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Cart