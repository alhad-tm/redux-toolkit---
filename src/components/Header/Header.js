import React from 'react'

const Header = ({count}) => {
  return (
    <div className='header bg-blue-950'> 
       <div className='flex flex-col md:flex-row items-center justify-between  w-full container'>

        <div>added {count} items</div>
        <div>Logo</div> 

       </div>
      
    </div>
  )
}

export default Header

 