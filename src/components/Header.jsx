import { logoutUser } from '../features/user/userSlice';
import { loginDisplay, registerDisplay } from '../features/displays/displaySlice'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import NavLi from './NavLi'
import React, { useState } from 'react'
import {BiArrowToRight,BiArrowToLeft} from 'react-icons/bi'

export default function Header() {
    const {name,logged,userPhoto} = useSelector(state=>state.user)
    const [headerShow,setHeaderShow] = useState(false)
    const navigate = useNavigate()
    const Dispatch = useDispatch()
  return (
    <>
      <button className={`fixed left-0 text-3xl text-grosa1-500 z-50`} onClick={()=>setHeaderShow(!headerShow)}><BiArrowToRight/></button>
      <button className={`fixed mx-24 text-2xl left-0 text-grosa1-500 z-50 ${!headerShow&&"hidden"} md:hidden`} onClick={()=>setHeaderShow(!headerShow)}><BiArrowToLeft/></button>
      <header className={`fixed bg-gmorado-600 z-50 text-gmorado-50 w-24 p-3 h-screen left-0 items-center flex-col ${!headerShow&&"hidden"} md:flex text-center`}>
      {!logged?
        <>
        <button className='hover:text-gverdeaqua-900' onClick={()=>Dispatch(loginDisplay())}>login</button>
        <button className='hover:text-gverdeaqua-900' onClick={()=>Dispatch(registerDisplay())}>register</button>
        </>
        : <button className='hover:text-gverdeaqua-900' onClick={()=>{Dispatch(logoutUser());navigate('/')}}>Log out</button>
      }
        <div className={`bg-grosa1-50 rounded-full w-10 h-10 overflow-hidden mx-auto`} >
          {logged&&<img src={userPhoto}/>}
        </div>
        {logged&&<p className={`text-grosa1-50 font-bold`}>{name}</p>}
   
        <nav className=''>
          <ul className=''>
            <Link className='hover:text-gverdeaqua-900' to={'/'}>Home</Link>
            {logged&&<NavLi  Title={"Teams"} to={"/teams"}/>}
          </ul>
        </nav>
        </header>
      </>
  )
}
