import { logout } from '../features/user/userSlice';
import { loginDisplay } from '../features/displays/displaySlice'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavLi from './NavLi'
import React, { useState } from 'react'

export default function Header() {
    const {name,logged} = useSelector(state=>state.user)
    const [headerShow,setHeaderShow] = useState(false)
    const Dispatch = useDispatch()
  return (
    <>
      <button className={`fixed left-0 bg-Ceast-bay-600 `} onClick={()=>setHeaderShow(!headerShow)}>Ver</button>
      <button className={`fixed mx-24 left-0 text-white ${!headerShow&&"hidden"}`} onClick={()=>setHeaderShow(!headerShow)}>x</button>
      <header className={`fixed bg-Ceast-bay-600 z-50 text-Ceast-bay-300 w-24 p-3 h-screen left-0 items-center flex-col ${!headerShow&&"hidden"} md:flex text-center`}>
      {!logged?
        <button onClick={()=>Dispatch(loginDisplay())}>login</button>
        : <button onClick={()=>Dispatch(logout())}>Log out</button>
      }
        <div className='bg-Cmaroon-flush-500 rounded-full w-10 h-10 mx-auto' ></div>
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
