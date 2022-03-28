import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Task from './Task'
import TasksOptions from './TasksOptions'

export default function RealList({ title, description, photo, tasks, date, idList }) {
    const [menu, setMenu] = useState(false)
    const { idTeam } = useParams()

   
    return (
        <article className='bg-Paleta1-300 flex-shrink-0 w-48  mt-2 mx-1 shadow-lg relative '>
            {menu && <TasksOptions idTeam={idTeam} idList={idList}/> }
            <h2 className='text-lg text-Paleta1-100'>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setMenu(!menu)} className='absolute top-0 right-1 z-50'>+</button>
            <div className='max-h-56 overflow-hidden'>
                <img className='' src={photo} alt="" />
            </div>
            <div className=''>
                {tasks.map((task, i) => {
                    return <Task key={task._id} data={task} />
                })}
            </div>
        </article>
    )
}
