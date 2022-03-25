import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { post } from '../api/axiosConfig'
export default function OneTeam({ image, description, title, idTeam = 0,members }) {
  const [options, setOptions] = useState(false)
  const [searchUsers, setSearchUsers] = useState({})
  
  const searchUser = async (e) => {
    // console.log(e.target.value)
    const { data } = await post('/teams/search/user', {
      email: e.target.value
    })
    if (data.success !== false) {
      setSearchUsers({
        exist: true,
        user: data
      })
      console.log(data)
    }
  }
  const addUserTeam = async (e) => {
    e.preventDefault()
    console.log(e.target.user.id)
    const data = await post('/teams/add/member/'+idTeam,{
      idUser:e.target.user.id
    })
  }
  return (
    <article className='w-80 m-1 flex items-center flex-col bg-Paleta1-100 rounded-sm relative pb-4  shadow-lg'>
      <Link to={"/teams/list/" + idTeam}>
        <p className=''>{description}</p>
        <div className='flex mt-2 w-80 h-80 items-center overflow-hidden '>
          {image ? <img className='object-cover h-full w-full  transition ease-out delay-100 duration-1000 hover:translate-y-3 ' src={image} alt="img" /> : <div className='bg-gradient-to-br from-Cfinn-500 to-Cmaroon-flush-500 h-full w-full'></div>}
        </div>
      </Link>

      <div>
      {members?.map(member=>{
        console.log(member)
        return (
        <div className='text-slate-800 text-sm'>
          <p>{member._id.userName}</p>
          <p>{member._id.email}</p>
        </div> ) 
      })}
      </div>

      <div className='text-Paleta1-100 bg-Paleta1-300 w-full flex items-center mt-2 absolute bottom-0'>
        
        <h1 className='ml-2'>{title}</h1>
        <button onClick={() => setOptions(!options)} className='right-2 absolute '>...</button>
        {idTeam!==0&&
        <div className={` absolute left-16 z-40 ${!options && 'hidden'} bg-slate-900`}>
          <button>add Member</button>
          <div className='text-slate-800'>
            <form action="" onSubmit={addUserTeam}>
              <input onChange={searchUser} type="text" name='email' placeholder='Email...' />
              {searchUsers.exist &&
                <button id={searchUsers.user._id} name="user" className='text-white border-2'>
                  <p>{searchUsers.user.userName}</p>
                </button>
              }
            </form>
          </div>
        </div>
        }
      </div>{/*morado*/}

    </article>
  )
}
