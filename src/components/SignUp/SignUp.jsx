import React, { useState } from 'react'
import BackImg from "../../assets/background.jpg"
import formImg from "../../assets/form-background.jpg"
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./SignUp.scss"
const SignUp = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [errmsg,setError]=useState("");
  const emailHandle=(e)=>{
    setEmail(e.target.value);
  }
  const passwordHandle=(e)=>{
    setPassword(e.target.value);
  }
  const SignupHandle=()=>{
    if(email===""||password===""){
      setError("Please fill all the fields");
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    console.log("login successfull"); 
    navigate("/");
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
  }

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
                  <input type="email" placeholder='Email Address' onChange={emailHandle} value={email} />
                  <input type="password" placeholder='Password' onChange={passwordHandle} value={password} />
                    <div className="btns">
                      <button className='signUp-btn' onClick={SignupHandle} >SIGN UP</button>
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