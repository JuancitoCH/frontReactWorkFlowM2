import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { post } from '../api/axiosConfig'
import Task from './Task'
import { setChangeList } from '../features/teams/teamsSlice'

export default function RealList({ title, description, photo, tasks, date, idList }) {
    const [menu, setMenu] = useState(false)
    const [addTask, setAddTask] = useState(false)
    const { idTeam } = useParams()
    const Dispatch = useDispatch()

    const createtask = async (e) => {
        e.preventDefault()
        const { data } = await post('/teams/create/task/' + idTeam, {
            idList,
            name: e.target.name.value,
            description: e.target.description.value
        })
        Dispatch(setChangeList(data))

        // .then(({data})=>{
        //     Dispatch(setChangeList(data))
        // })
    }
    return (
        <article className='bg-Paleta1-300 flex-shrink-0 w-48  mt-2 mx-1 shadow-lg relative '>
            <div className={`absolute bg-white flex flex-col ${!menu && "hidden"} z-40 `}>
                <button className='' onClick={() => { setAddTask(!addTask) }}>add Task</button>
                <button>members</button>
                <button>update Task</button>
                <button>delete Task</button>
                <div className={` absolute p-5 bg-slate-500 bottom-5 z-50  ${!addTask && "hidden"}`}>
                    <button className='asbsolute right-0' onClick={() => setAddTask(!addTask)}>x</button>
                    <form action="" onSubmit={createtask}>
                        <input name='name' type="text" placeholder='name...' />
                        <input name='description' type="text" placeholder='description...' />
                        <button>send</button>
                    </form>

                </div>
            </div>
            <h2 className='text-lg text-Paleta1-100'>{title}</h2>
            <button onClick={() => setMenu(!menu)} className='absolute top-0 right-1 z-50'>...</button>
            <div className='max-h-56 overflow-hidden'>
                <img className='' src={photo} alt="" />
            </div>
            <div className=''>
                {tasks.map((task, i) => {
                    return <Task key={task._id} data={task} />
                })}
            </div>
            <p>{description}</p>
        </article>
    )
}
