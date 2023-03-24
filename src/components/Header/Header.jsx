import React, { useState } from 'react'
import "./Header.scss"
import List from '../List/List'
const Header = () => {
  const [text,setText] = useState("");
  const [data,setData] = useState([]);
  const handleInputText =(e)=>{
       setText(e.target.value);
       console.log(text);
  }
  const handleClick=()=>{
    const obj ={
      id: Math.random().toString(36).substring(2,2+2),
      heading:text
    }
    data.push(obj);
    setText("");
    console.log(data)
  }
  return (
   <div className="header">
    <h1 className="heading">Todo List App</h1>
          <div className="input-content">
            <input type="text" className="input" onChange={handleInputText} value={text} ></input>
            <button className='btn' onClick={handleClick}>ADD GOALS</button>
          </div>
      <List data={data}/>
   </div>
  )
}

export default Header