import { logoutUser } from '../features/user/userSlice';
import { loginDisplay, registerDisplay } from '../features/displays/displaySlice'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavLi from './NavLi'
import React, { useState } from 'react'
import {BiArrowToRight,BiArrowToLeft} from 'react-icons/bi'

export default function Header() {
    const {name,logged,userPhoto} = useSelector(state=>state.user)
    const [headerShow,setHeaderShow] = useState(false)
    const Dispatch = useDispatch()
  return (
    <>
      <button className={`fixed left-0 text-3xl text-Paleta1-100 z-50`} onClick={()=>setHeaderShow(!headerShow)}><BiArrowToRight/></button>
      <button className={`fixed mx-24 text-2xl left-0 text-Paleta1-100 z-50 ${!headerShow&&"hidden"}`} onClick={()=>setHeaderShow(!headerShow)}><BiArrowToLeft/></button>
      <header className={`fixed bg-Paleta1-300 z-50  w-24 p-3 h-screen left-0 items-center flex-col ${!headerShow&&"hidden"} md:flex text-center`}>
      {!logged?
        <button onClick={()=>Dispatch(loginDisplay())}>login</button>
        : <button onClick={()=>Dispatch(logoutUser())}>Log out</button>
      }
      {
        <button onClick={()=>Dispatch(registerDisplay())}>register</button>

      }
        <div className={`bg-Paleta1-100 rounded-full w-10 h-10 overflow-hidden`} >
          {logged&&<img src={userPhoto}/>}
        </div>
        {logged&&<p className={`text-Paleta1-100`}>{name}</p>}
   
        <nav className=''>
          <ul className=''>
            <Link to={'/'}>Home</Link>
            {logged&&<NavLi Title={"Teams"} to={"/teams"}/>}
          </ul>
        </nav>
        </header>
      </>
  )
}
