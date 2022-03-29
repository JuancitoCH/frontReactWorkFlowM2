import React from 'react'
import {Link} from 'react-router-dom'
export default function NavLi({Title,to}){
  return (
    <>
    <li className='hover:text-gverdeaqua-900'><Link to={to}>{Title}</Link></li>
    </>
  )
}
