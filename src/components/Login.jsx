import React,{useRef, useState} from 'react'
import { FcGoogle } from 'react-icons/fc';
// import {useNavigate} from 'react-router-dom'
// import { AiFillFacebook,AiFillGithub } from 'react-icons/ai';
import { useSelector,useDispatch} from 'react-redux';
import { loginDisplay } from '../features/displays/displaySlice';
import { loginState } from '../features/user/userSlice';
// import '../static/css/Login.css'

export default function Login() {
  const Dispatch = useDispatch()
  const {loginShow} = useSelector(state=>state.displays)
  
  const send=(e)=>{
    e.preventDefault()
  }
  return(
    <>
    {loginShow&&<div className='bg-Cfinn-900 opacity-60 h-screen w-screen fixed z-40'></div>}
    <div className={`bg-gradient-to-r from-Cmaroon-flush-600 to-Cfinn-700 fixed  max-h-fit max-w-fit rounded-md top-24 grid grid-cols-2 ${!loginShow?"hidden":""} z-50`}>
      <div className='p-10'>
        <button onClick={()=>Dispatch(loginDisplay())} className='absolute right-4 top-2 text-Cmaroon-flush-800'>X</button>
        <form action="" onSubmit={send} className="flex flex-col">
          <h1 className=' self-center text-4xl mb-5 mx-32 text-Cwaikawa-gray-200'>Login</h1>
          <label className='text-Cwaikawa-gray-200' htmlFor="email">Email</label>
          <input id="email" type="text" className='' name='email'/>
          <label className='text-Cwaikawa-gray-200' htmlFor="password">Password</label>
          <input id='password' type="text" className='' name='password'/>
          <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-Cfinn-200 mt-2 mx-7' onClick={()=>{Dispatch(loginState())}} >Login</button>
        </form>
        <div className='h-1 bg-Cjelly-bean-600 my-5 mx-20'></div>
          <a href="/" className='flex items-center justify-center bg-gradient-to-r from-amber-200 to-sky-500  rounded-sm my-5 mx-7 text-Cwaikawa-gray-800'> <FcGoogle/><p> Login with Google</p></a>
      </div>
      <div className='bg-slate-700 bg-[url("https://media.istockphoto.com/vectors/online-registration-and-sign-up-concept-young-man-signing-up-or-login-vector-id1219250758?k=20&m=1219250758&s=170667a&w=0&h=L92i6CGjAyshZXG5ViGpZqq3OuVjleC-hIM2AkaMd8s=")]'>
        {/* <img className='con' src="https://media.istockphoto.com/vectors/online-registration-and-sign-up-concept-young-man-signing-up-or-login-vector-id1219250758?k=20&m=1219250758&s=170667a&w=0&h=L92i6CGjAyshZXG5ViGpZqq3OuVjleC-hIM2AkaMd8s=" alt="aaa" /> */}
      </div>

      </div>
     
    </>

  )
}
