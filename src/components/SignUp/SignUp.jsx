import React from 'react'
import BackImg from "../../assets/background.jpg"
import formImg from "../../assets/form-background.jpg"
import { useNavigate } from 'react-router-dom'
import "./SignUp.scss"
const SignUp = () => {
  const navigate=useNavigate();
  return (
    <div className='form' style={{backgroundImage : `url(${BackImg})`}}>
          <div className="container" style={{backgroundImage : `url(${formImg})`}}>
            <div className="form-content">
                <div className="top">
                  <h1 className='heading1'>Welcome To Todo</h1>
                  <h2 className='heading2' >SignUp</h2>
                </div>
                <div className="middle">
                  <input type="text" placeholder='First name'/>
                  <input type="text" placeholder='Last name'/>
                  <input type="email" placeholder='Email Address' />
                  <input type="password" placeholder='Password' />
                    <div className="btns">
                      <button className='signUp-btn'>SIGN UP</button>
                    </div>
                </div>
                <div className="bottom">
                  <div className="nau">Already a user?</div>
                  <button className='login-btn' onClick={()=>navigate('/')}>SIGN IN</button>
                </div>
            </div>
          </div>
    </div>
  )
}

export default SignUp