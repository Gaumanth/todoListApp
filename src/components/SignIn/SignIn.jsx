import React, { useState } from 'react'
import BackImg from "../../assets/background.jpg"
import formImg from "../../assets/form-background.jpg"
import { json, useNavigate } from 'react-router-dom'
import "./SignIn.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
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
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("login successfull");
          navigate('/todo');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Invalid user name or password");
          console.log(errorMessage);
        });
          
    
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