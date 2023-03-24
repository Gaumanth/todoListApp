import React from 'react'
import "./SingleList.scss"
const SingleList = ({text}) => {
  return (
    <ul className='single-list'>
        <li>{text}</li>
    </ul>
  )
}

export default SingleList