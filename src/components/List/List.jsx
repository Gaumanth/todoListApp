import React from 'react'
import "./List.scss"
import SingleList from '../SingleList/SingleList'
const List = ({data,handleDeleteClick}) => {
  console.log(data)
  return (
    <div className='list'>
      {data.map((item)=> <SingleList key={item.id} text={item.heading} id={item.id} handleDeleteClick={handleDeleteClick}/> )}
    </div>
  )
}

export default List