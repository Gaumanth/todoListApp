import React from 'react'
import BackImg from "../../assets/background.jpg"
import formImg from "../../assets/form-background.jpg"
import { useNavigate } from 'react-router-dom'
import "./SignIn.scss"
const SignIn = () => {
  const navigate=useNavigate();

  return (
    <div className='form' style={{backgroundImage : `url(${BackImg})`}}>
          <div className="container" style={{backgroundImage : `url(${formImg})`}}>
            <div className="form-content">
                <div className="top">
                  <h1 className='heading1'>Welcome To Todo App</h1>
                  <h2 className='heading2' >Login</h2>
                </div>
                <div className="middle">
                  <input type="email" placeholder='Email Address' />
                  <input type="password" placeholder='Password' />
                    <div className="btns">
                      <button className='login-btn'>LOGIN</button>
                      <div className='fp'>Forgot Password?</div>
                    </div>
                </div>
                <div className="bottom">
                  <div className="nau">not a user?</div>
                  <button className='signUp-btn' onClick={()=>navigate("/signup")} >SIGN up</button>
                </div>
            </div>
          </div>
    </div>
  )
}

export default SignIn