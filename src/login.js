import React, { Component } from 'react'
import busi from './busi.jpg'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useNavigate } from 'react-router-dom'
export default function Login(){
const  navigate = useNavigate()
    const[flip,setflip] = React.useState(false)
    const email = React.useRef(null)
    const password = React.useRef(null)
    const emaillogin = React.useRef(null)
    const passwordlogin  = React.useRef(null)
      function loginsubmit(eve){
        eve.preventDefault()
         axios.post("http://localhost:5000/login",{
 
   email : emaillogin.current.value,
   password:passwordlogin.current.value
  
}).then(res=>{if(res.data.status=="success"){navigate('/')}else{alert("wrong email or password")}}).catch((err)=>console.log(err))
 console.log(emaillogin.current.value,passwordlogin.current.value)
      }
      function signinsubmit(eve){
         eve.preventDefault()
         
         axios.post("http://localhost:5000/signin",{
 
   email : email.current.value,
   password:password.current.value
}).then(res=>{if(res.data.status=="success"){setflip(false)}else{alert(res.data.status)}}).catch((err)=>console.log(err))

      }
    return(
        <div style={{display:'flex',justifyContent:'center'}}>
         

<div class={`${flip?"flip-card-hover flip-card":"flip-card"}`}>
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <form onSubmit={loginsubmit}>
      <h5 style={{textAlign:'center'}}>Login</h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input ref={emaillogin} minLength={6} maxLength={40} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input ref={passwordlogin} minLength={7} maxLength={30} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
       <div style={{textAlign:'center'}}>
        <p className='text-muted'>Don't have an account?</p>
        <button onClick={()=>setflip(true)} className='btn btn-success'>New Account</button>
       </div>
    </div>
    <div class="flip-card-back">
      <form onSubmit={signinsubmit}>
            <h5 style={{textAlign:'center'}}>Sign In</h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input ref={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input ref={password} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
       <div style={{textAlign:'center'}}>
        <p className='text-muted'>Don't have an account?</p>
        <button onClick={()=>setflip(false)} className='btn btn-success'>Login</button>
       </div>
    </div>
  </div>
</div>

        </div>
    )
}