import React from 'react'
import {Link} from 'react-router-dom'
export default function NavLi({Title,to}){
  return (
    <>
    <li className=''><Link to={to}>{Title}</Link></li>
    </>
  )
}
