import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask, deleteTaskMember,addTaskMember } from '../features/teams/teamsSlice'
import { useParams } from 'react-router-dom'
import { get } from '../api/axiosConfig'
import {GrFormClose} from 'react-icons/gr'


export default function TaskEdit({ data }) {
    const Dispatch = useDispatch()
    const { idTeam } = useParams()
    const [displayMembersTeam, setdisplayMembersTeam] = useState(false)
    const [teamMembers, setTeamMembers] = useState([])
    const editTask = (e) => {
        e.preventDefault()
        // console.log(e.target.name.value)
        Dispatch(updateTask({ idTeam, idTask: data._id, name: e.target.name.value, description: e.target.description.value }))
    }
    const myTeam = async () => {
        const { data } = await get('teams/oneTeam/' + idTeam)
        // console.log(data.members)
        setTeamMembers(data?.members)
        // return data
    }
    const errorImg=(e)=>{
        console.log(e)
        e.target.style = "display:none"
        return e.target.onError=null
    }
    const onErrorImage = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        e.target.onError = null
      }
    return (
        <>
            <div className='bg-white rounded-xl overflow-hidden z-50 absolute border-grosa1-50 border-2 p-2'>
                <form action="" onSubmit={editTask}>
                    <input name='name' className='font-bold text-lg' type="text" defaultValue={data.name} />
                    <textarea name="description" id="" cols="30" rows="4" defaultValue={data.description}></textarea>
                    <button>Update</button>
                </form>

                <button className="text-sm font-semibold hover:text-grosa1-50" onClick={() => {
                    setdisplayMembersTeam(!displayMembersTeam)
                    myTeam()
                }}> add members in charge</button>

                {displayMembersTeam &&
                    <div>
                        {teamMembers?.map(member => {
                           return <div key={member._id._id}>
                                <div className='h-5 w-5 rounded-full overflow-hidden'>
                                    <img src={member._id.userPhoto} alt="P" onError={onErrorImage} />
                                </div>
                                <p className='break-words text-xs'>{member._id.email}</p>
                                <button onClick={()=>Dispatch(addTaskMember({idTask:data._id,idTeam,idUser:member._id._id}))}>Add</button>
                            </div>
                        })}
                    </div>
                }

                {data.members.map((member, i) => {
                    return <div key={i} className=' relative flex items-center bg-slate-200 shadow-2xl '>

                        <button className='absolute top-0 right-2' onClick={() => Dispatch(deleteTaskMember({ idUser: member._id, idTask: data._id, idTeam }))}><GrFormClose/></button>
                        <div className='h-3 w-3 rounded-full overflow-hidden bg-grosa1-50'>
                            {/* <img src={member.userPhoto} alt="P" /> */}
                            <img src={member.userPhoto ? member.userPhoto : "a" } alt="P" onError={errorImg} />

                        </div>
                        <p className='break-words text-xs'>{member.email}</p>
                    </div>
                })}
            </div>

        </>
    )
}
