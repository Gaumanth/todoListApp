import React from 'react'
import "./List.scss"
import SingleList from '../SingleList/SingleList'
const List = ({data}) => {
  return (
    <div className='list'>
      {data.map((item)=> <SingleList key={item.id} text={item.heading}/> )}
    </div>
  )
}

export default List