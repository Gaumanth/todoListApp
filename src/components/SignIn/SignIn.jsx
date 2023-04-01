import React, { useState } from 'react'
import BackImg from "../../assets/background.jpg"
import formImg from "../../assets/form-background.jpg"
import { json, useNavigate } from 'react-router-dom'
import "./SignIn.scss"
import jsonData from "../../data.json";
const SignIn = () => {
  const navigate=useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword =(e)=>{
    setPassword(e.target.value)
  }
  const handleLogin=()=>{
    const flagArray = jsonData.map((item) => item.email === email && item.password === password)
    
    const flag = flagArray.filter((item) => item === true);
    const flagValue = flag[0];
    if(flagValue === true){
     navigate("/todo")
    }
    else{
      alert("Email or Password is Invalid")
    }
    
    
  }

  return (
    <div className='form' style={{backgroundImage : `url(${BackImg})`}}>
          <div className="container" style={{backgroundImage : `url(${formImg})`}}>
            <div className="form-content">
                <div className="top">
                  <h1 className='heading1'>Welcome To Todo App</h1>
                  <h2 className='heading2' >Login</h2>
                </div>
                <div className="middle">
                  <input type="email" placeholder='Email Address' onChange={handleEmail} value={email} />
                  <input type="password" placeholder='Password' onChange={handlePassword} value={password}/>
                    <div className="btns">
                      <button className='login-btn' onClick={handleLogin}>LOGIN</button>
                      <div className='fp'>Forgot Password?    </div>
                    </div>
                </div>
                <div className="bottom">
                  <div className="nau">not a user?</div>
                  <button className='signUp-btn' onClick={()=>navigate("/signup")} >SIGN UP</button>
                </div>
            </div>
          </div>
    </div>
  )
}

export default SignIn