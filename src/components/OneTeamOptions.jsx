import React, { useState } from 'react'
import { post } from '../api/axiosConfig'
import { useDispatch } from 'react-redux'
import { setChangeTeams } from '../features/teams/teamsSlice'

export default function OneTeamOptions({ idTeam }) {
    const Dispatch=useDispatch()
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
        // console.log(e.target.user.id)
        const {data} = await post('/teams/add/member/' + idTeam, {
            idUser: e.target.user.id
        })
        Dispatch(setChangeTeams(data))
    }
    const [searchUsers, setSearchUsers] = useState({})
    const [addMember, setAddMember] = useState(false)
    const [editTeam, setEditTeam] = useState(false)

    return (
        <div className={` absolute left-16 z-40 bg-slate-900`}>
            <button onClick={()=>setAddMember(!addMember)}>add Member</button>
            <button onClick={()=>setEditTeam(!editTeam)}>Edit Team</button>
            {addMember&&
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
            }
            {editTeam &&
                 <div className=''></div>

            }

        </div>
    )
}
