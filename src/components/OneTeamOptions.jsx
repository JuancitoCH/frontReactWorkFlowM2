import React, { useState } from 'react'
import { post } from '../api/axiosConfig'
import { useDispatch } from 'react-redux'
import { setChangeTeams } from '../features/teams/teamsSlice'
import TeamsCreatorToUpdate from './TeamsCreatorToUpdate'
import {AiOutlineUserAdd} from 'react-icons/ai'
export default function OneTeamOptions({ idTeam ,data }) {
    const Dispatch = useDispatch()
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
        const { data } = await post('/teams/add/member/' + idTeam, {
            idUser: e.target.user.id
        })
        Dispatch(setChangeTeams(data))
    }
    const [searchUsers, setSearchUsers] = useState({})
    const [addMember, setAddMember] = useState(false)
    const [editTeam, setEditTeam] = useState(false)

    return (
        <div className={` absolute flex flex-col rounded-sm  -top-80 z-40 bg-white text-gmorado-900 text-center `}>
            <button className='hover:bg-gbluebell-700 hover:text-white transition-colors ease-in p-2' onClick={() => setAddMember(!addMember)}>Add Member</button>
            <button className='hover:bg-gbluebell-700 hover:text-white transition-colors ease-in p-2' onClick={() => setEditTeam(!editTeam)}>Edit Team</button>
            {addMember &&
                <div className='text-slate-800'>
                    <form action="" onSubmit={addUserTeam}>
                        <input className='text-center ' onChange={searchUser} type="text" name='email' placeholder='Email...' />
                        {searchUsers.exist &&
                            <button className="text-Paleta1-100 rounded-b-md mb-2 bg-gbluebell-700 " id={searchUsers.user._id} name="user" >
                                <div className='flex items-center justify-center'>
                                <p className="" >{searchUsers.user.userName}</p>
                                <AiOutlineUserAdd/>

                                </div>
                            </button>
                        }
                    </form>
                </div>
            }

            {editTeam &&
                <>
                    <div onClick={() => setEditTeam(!editTeam)} className={`bg-gmoradoclaro-700 opacity-50 h-screen w-screen fixed z-30 left-0 top-0  `}></div>
                    <TeamsCreatorToUpdate idTeam={idTeam} data={data} />

                </>
            }
        </div>
    )
}
