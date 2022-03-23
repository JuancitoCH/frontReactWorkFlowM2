import React from 'react'
import Task from './Task'
export default function RealList({ title, description, photo, tasks, date }) {
    return (
        <article className='bg-Paleta1-300 flex-shrink-0 w-48  mt-2 mx-1 shadow-lg '>
            <h2 className='text-lg text-Paleta1-100'>{title}</h2>
            <div className='max-h-56 overflow-hidden'>
                <img className='' src={photo} alt="" />
            </div>
            <div className=''>
                {tasks.map(task => {
                    return <Task data={task} />
                })}
            </div>
            <p>{description}</p>
        </article>
    )
}
