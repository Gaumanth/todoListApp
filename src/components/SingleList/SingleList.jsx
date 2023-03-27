import React from 'react'
import "./SingleList.scss"
const SingleList = ({text,id,handleDeleteClick}) => {

  return (
    <>
        {/* <ul className='single-list'>
        <li>{text}</li>
        
  </ul> */}


    <div className='single-list'>
      <div className='li'>{text}</div>
      <button className='btn' onClick={()=> handleDeleteClick(id)}>Delete</button>
    </div>
    </>

  )
}

export default SingleList