import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { increment,decrement } from '../../../redux/cart' 

const AfterCart = () => {

    const {cartCount}= useSelector((state)=>state.cart)

    const dispatch=useDispatch()
   
  return (
    <div className='flex gap-2 items-center'>
         <button className='p-4 bg-green-900 ' onClick={()=>dispatch(decrement())}>Dec</button>
         <span className='text-2xl'>{cartCount}</span> 
      <button className='p-4 bg-green-900 ' onClick={()=>dispatch(increment())}> Inc</button>  
     
    </div>
  ) 
}

export default AfterCart
