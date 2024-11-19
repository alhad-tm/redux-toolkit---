import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../../../redux/cart'



const AfterCart = () => {

    const {cartCount}=useSelector((state)=>state.cart)

    const dispatch=useDispatch()

   
   
  return (
    <div className='flex gap-2 items-center'>
         <button onClick={()=>dispatch(decrement())} className='p-4 bg-green-900 ' >Dec</button>
         <span className='text-2xl'>{cartCount}</span> 
      <button  onClick={()=>dispatch(increment())} className='p-4 bg-green-900 ' > Inc</button>  
     
    </div>
  ) 
}

export default AfterCart

  