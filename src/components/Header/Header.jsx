import React, { useEffect, useState } from 'react'
import "./Header.scss"
import List from '../List/List'
import backImg from "../../assets/background.jpg"
import {createPortal} from "react-dom"
const Header = () => {
  const [text,setText] = useState("");
  const [data,setData] = useState([]);
  useEffect(()=>{
      // let todos = JSON.parse(localStorage.getItem('todo-list'));
      // console.log(todos)
      // setData(todos);

  },[])


  useEffect(()=>{
    if(data.length === 0){
      // localStorage.removeItem("todo-list")
    }
  },[data])
  const handleInputText =(e)=>{
       setText(e.target.value);
  }
  const handleClick=()=>{
    let newText=text.trim();
    // setText(newText.join(" "));
    if(newText.length === 0 ){
      alert("Please Enter some text")
    }
    else{
      const obj ={
        id: Math.random().toString(36).substring(2,3+2),
        heading:newText
      }
      
      data.push(obj);
      console.log(data)
      setText("");
    }
    
  }

  const handleDeleteClick=(id)=>{
       const leftItems = data.filter((todo)=> todo.id !== id)
       setData(leftItems)
  }
  const handleSaveButton=()=>{
    alert("Your Data Is Saved")
    localStorage.setItem('todo-list', JSON.stringify(data));
  }
  const Button=()=>{
    return <button className='save-btn' onClick={handleSaveButton}>SAVE</button>
  }
  return (
   <div className="header" style={{backgroundImage : `url(${backImg})`}}>
   {createPortal(<Button/>,document.getElementById("save-button"))}
    <div className="header-conatiner">
    <h1 className="heading">Todo List App</h1>
          <div className="input-content">
            <input type="text" className="input" onChange={handleInputText} value={text} ></input>
            <button className='btn' onClick={handleClick}>ADD GOALS</button>
          </div>
       {data.length === 0 ? <h1 style={{marginTop:'100px', color:"green"}}>Add Your Goals...</h1> : <List data={data} handleDeleteClick={handleDeleteClick}/>}   
      
    </div>
    
   </div>
  )
}

export default Header