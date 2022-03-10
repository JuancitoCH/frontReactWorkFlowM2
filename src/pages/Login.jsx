import React,{useRef} from 'react'
import { FcGoogle } from 'react-icons/fc';
import {useNavigate} from 'react-router-dom'
import { AiFillFacebook,AiFillGithub } from 'react-icons/ai';
import { useDispatch,useSelector} from 'react-redux';
import { login, logout } from '../features/user/userSlice';
// import '../static/css/Login.css'

export default function Login() {
  const send=(e)=>{
    e.preventDefault()
  }
  return(
    <div className=''>
      <button className=''>X</button>
      <h1>Login</h1>
      <form action="" onSubmit={send}>
        <label className='' htmlFor="email">Email</label>
        <input id="email" type="text" className='' name='email'/>
      
        <label className='' htmlFor="password">Password</label>
        <input id='password' type="text" className='' name='password'/>
        <button className='' >Login</button>
      </form>
      <div className=''></div>
        <a href="/"> <FcGoogle/> Login with Google</a>
    </div>
  
  )
}
