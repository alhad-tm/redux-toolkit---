import React from 'react'

const AfterCart = ({addCount,count,lessCount}) => {
   
  return (
    <div className='flex gap-2 items-center'>
         <button className='p-4 bg-green-900 ' onClick={lessCount}>Dec</button>
         <span className='text-2xl'>{count}</span> 
      <button className='p-4 bg-green-900 ' onClick={addCount}> Inc</button>  
     
    </div>
  ) 
}

export default AfterCart
