import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
    const {name,logged} = useSelector(state=>state.user)
  return (<header className="" >
       
    </header>
  )
}
