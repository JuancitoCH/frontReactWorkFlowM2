import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Task from './Task'
import TasksOptions from './TasksOptions'
import {FiMoreHorizontal} from 'react-icons/fi'

export default function RealList({ title, description, photo, tasks, date, idList }) {
    const [menu, setMenu] = useState(false)
    const { idTeam } = useParams()

   
    return (
        <>
        <div className={`bg-gmoradoclaro-700 opacity-50 h-screen w-screen fixed z-30 left-0 top-0 ${!menu && 'hidden'}`} onClick={() => setMenu(!menu)}></div>
        <article className='bg-gmoradoclaro-50 flex-shrink-0 w-56  mt-2 mx-auto md:mx-1 shadow-xl relative '>
            {menu && <TasksOptions idTeam={idTeam} idList={idList} data={{ title, description, photo}}/> }
            <h2 className='text-lg font-semibold mx-2 text-Paleta1-100'>{title}</h2>
            <p className='mx-2 text-gmorado-900'>{description}</p>
            <button onClick={() => setMenu(!menu)} className='absolute top-2 right-1 z-20 text-white'><FiMoreHorizontal/></button>
            <div className='max-h-56 overflow-hidden'>
                <img className='' src={photo} alt="" />
            </div>
            <div className=''>
                {tasks.map((task, i) => {
                    return <Task key={task._id} data={task} idTeam={idTeam} />
                })}
            </div>
        </article>
                </>
    )
}
