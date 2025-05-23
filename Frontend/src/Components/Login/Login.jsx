import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({setShowLogin}) => {

   const [currState,setcurrstate] = useState("Login")

 

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
              <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
              </div>
              <div className="login-popup-inputs">
                {
                    currState==="Login"?<></>: <input type="text" placeholder='Your name' required/>
                }
               
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required/>
              </div>
              <button>{currState==="Sign Up"?"Create account":"Login"}</button>
              <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agrree to the terms of use & privacy policy.</p>
              </div>
              {currState==="Login"?<p>Create a new account? <span onClick={()=>setcurrstate("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setcurrstate("Login")}>Login here</span></p>}
              

        </form>
    </div>
  )
}

export default Login