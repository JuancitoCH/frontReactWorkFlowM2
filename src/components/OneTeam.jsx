import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { deleteMemberTeam } from '../features/teams/teamsSlice'
import {FiMoreHorizontal} from 'react-icons/fi'
import {GrFormClose} from 'react-icons/gr'

import OneTeamOptions from './OneTeamOptions'
export default function OneTeam({ image, description, title, idTeam = 0, members, leader }) {
  const [options, setOptions] = useState(false)
  const dataToSend = { image, description, title, idTeam }
  const Dispatch=useDispatch()
  const myId = useSelector(state=>state.user.id)
  const onErrorImage = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1622601409322-e46f80fc735d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aFNQNkp4OHc0WjR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    e.target.onError = null
  }
  const [showMembers,setshowMembers] = useState(false)


  return (
    <>
      <div onClick={() => setOptions(!options)} className={`bg-gmoradoclaro-700 opacity-30 h-screen w-screen fixed z-30 left-0 top-0 ${!options && 'hidden'}`}></div>

      <article className='text-gmorado-900 w-80 m-1 flex items-center flex-col bg-Paleta1-100 rounded-sm relative pb-4  shadow-lg'>
        <Link to={"/teams/list/" + idTeam}>
          <p className=' absolute right-1 font-bold text-sm uppercase'>{leader?.userName}</p>
          
          <p className=''>{description}</p>
          <div className='flex mt-2 w-80 h-80 items-center overflow-hidden '>
            {image ? <img className='object-cover h-full w-full  transition ease-out delay-100 duration-1000 hover:translate-y-3 ' src={image} alt="img" onError={onErrorImage} /> : <div className='bg-gradient-to-br from-Cfinn-500 to-Cmaroon-flush-500 h-full w-full'></div>}
          </div>
        </Link>

        <button className={`mb-3 text-Paleta1-100 px-3 ${showMembers&&"mb-0"} rounded-b-md bg-grosa1-100 hover:bg-gbluebell-700`} onClick={()=>setshowMembers(!showMembers)}>Members</button>
        {showMembers&&

        <div className='self-center mb-4'>
          {members?.map(member => {
            if(member._id._id !== myId){

            return (
              <div key={member._id._id} className={`relative text-xs ${member.role === "not" ? "text-grosa1-800" : "text-gmorado-900"}  text-sm bg-gmoradoclaro-300 shadow-md p-2 m-1 rounded-md`}>
                <button onClick={()=>Dispatch(deleteMemberTeam({idTeam,idUser:member._id._id}))} className='absolute top-0 right-0'><GrFormClose/></button> 
                <p className='font-bold'>{member._id.userName}</p>
                <p className='font-extralight'>{member._id.email}</p>
                <p className=''>{member.role}</p>
              </div>)
            }
          })}
        </div>
        }

        <div className='text-Paleta1-100 text-xl bg-gmorado-900 w-full flex items-center mt-2 absolute bottom-0'>

          <h1 className='ml-2'>{title}</h1>
          <button onClick={() => setOptions(!options)} className='hover:text-grosa1-100 right-2 absolute z-40'><FiMoreHorizontal/></button>
          {idTeam !== 0 &&
            <div className={`${!options && 'hidden'}`}>
              <OneTeamOptions idTeam={idTeam} data={dataToSend} />
            </div>
          }
        </div>{/*morado*/}

      </article>
    </>
  )
}
