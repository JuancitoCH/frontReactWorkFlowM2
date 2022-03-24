import React, { useState } from 'react'
import Task from './Task'
export default function RealList({ title, description, photo, tasks, date }) {
    const [menu,setMenu]= useState(false)
    const [addTask,setAddTask] = useState(false)
    return (
        <article className='bg-Paleta1-300 flex-shrink-0 w-48  mt-2 mx-1 shadow-lg relative '>
            <div className={`absolute bg-white flex flex-col ${!menu&&"hidden"} z-40 `}>
                <button className='' onClick={()=>{setAddTask(!addTask)}}>add Task</button>
                <button>members</button>
                <button>update Task</button>
                <button>delete Task</button>
                <div className={` absolute p-5 bg-slate-500 bottom-5 z-50  ${!addTask&&"hidden"}`}>
                <form action="">
                    <input type="text" placeholder='name..'/>
                </form>

                </div>
            </div>
            <h2 className='text-lg text-Paleta1-100'>{title}</h2>
            <button  onClick={()=>setMenu(!menu)} className='absolute top-0 right-1 z-50'>...</button>
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
