import React from 'react'
import { useDispatch } from 'react-redux'
import { increment,decrement } from '../../../redux/cart'



const AfterCart = ({cartCount,productID}) => {

 
    const dispatch=useDispatch()

   
  return (
    <div className='flex gap-2 items-center'>
         <button onClick={()=>dispatch(decrement(productID))} className='p-4 bg-green-900 ' >Dec</button>
         <span className='text-2xl'>{cartCount}</span> 
        <button  onClick={()=>dispatch(increment(productID))} className='p-4 bg-green-900 ' > Inc</button>  
     
    </div>
  ) 
}

export default AfterCart

  