import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { deleteMemberTeam } from '../features/teams/teamsSlice'


import OneTeamOptions from './OneTeamOptions'
export default function OneTeam({ image, description, title, idTeam = 0, members, leader }) {
  const [options, setOptions] = useState(false)
  const Dispatch=useDispatch()
  const myId = useSelector(state=>state.user.id)
  const onErrorImage = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1622601409322-e46f80fc735d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aFNQNkp4OHc0WjR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    e.target.onError = null
  }


  return (
    <>
      <div onClick={() => setOptions(!options)} className={`bg-Cfinn-900 opacity-60 h-screen w-screen fixed z-30 left-0 top-0 ${!options && 'hidden'}`}></div>

      <article className='w-80 m-1 flex items-center flex-col bg-Paleta1-100 rounded-sm relative pb-4  shadow-lg'>
        <Link to={"/teams/list/" + idTeam}>
          <p className=''>{description}</p>
          <p className=' relative font-bold text-sm uppercase'>{leader?.userName}</p>
          <div className='flex mt-2 w-80 h-80 items-center overflow-hidden '>
            {image ? <img className='object-cover h-full w-full  transition ease-out delay-100 duration-1000 hover:translate-y-3 ' src={image} alt="img" onError={onErrorImage} /> : <div className='bg-gradient-to-br from-Cfinn-500 to-Cmaroon-flush-500 h-full w-full'></div>}
          </div>
        </Link>

        <div className='self-start mb-4'>
          {members?.map(member => {
            if(member._id._id !== myId){

            return (
              <div key={member._id._id} className={`relative ${member.role === "not" ? "text-Cmaroon-flush-500" : "text-slate-800"} text-slate-800 text-sm bg-slate-200 p-2 m-1 rounded-md`}>
                <button onClick={()=>Dispatch(deleteMemberTeam({idTeam,idUser:member._id._id}))} className='absolute top-0 right-0'>X</button> 
                <p className='font-bold'>{member._id.userName}</p>
                <p className='font-extralight'>{member._id.email}</p>
                <p className='text-Cmaroon-flush-500'>{member.role}</p>
              </div>)
            }
          })}
        </div>

        <div className='text-Paleta1-100 bg-Paleta1-300 w-full flex items-center mt-2 absolute bottom-0'>

          <h1 className='ml-2'>{title}</h1>
          <button onClick={() => setOptions(!options)} className='right-2 absolute z-40'>...</button>
          {idTeam !== 0 &&
            <div className={`${!options && 'hidden'}`}>
              <OneTeamOptions idTeam={idTeam} />
            </div>
          }
        </div>{/*morado*/}

      </article>
    </>
  )
}
