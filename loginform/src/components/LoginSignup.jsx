import React, { useState } from 'react'
import '../index.css'
const LoginSignup = () => {

    const [active,setActive]=useState("Sign Up");

  return (
    <div>
      <div className='container'>
        <div className='heading'>{active}</div>
        <div className='inputs'>
          {active==="Sign Up"?<div className='input'>
            <p>Name</p>
            <input type='text' placeholder='Enter Your Name' />
          </div>:<div></div>}
          
          <div className='input' >
          <p>Email</p>
            <input type='email' placeholder='Enter Your email' />
          </div>
          <div className='input'>
          <p>Password</p>

            <input type='password' placeholder='Enter Your password'/>
          </div>
          {active==="Login"?<div className='forgot-pass'>
            <p>
              Forgot Password? <a href=''>Click here</a>
            </p>
          </div>:<div></div>}
        </div>
        <div className='buttons'>
          <div className={active==="Sign Up"?'submit ':'gray' } onClick={()=>setActive("Sign Up")}>Sign Up</div>
          <div className={active==="Login"?'submit ':' gray' } onClick={()=>setActive("Login")}>Login</div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
