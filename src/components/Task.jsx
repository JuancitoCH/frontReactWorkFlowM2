import React, { useState } from 'react'
import TaskEdit from './TaskEdit'
export default function Task({data}) {
    const {description,members,state,name,idList,_id:idTask,} = data
    // console.log(data)
    // console.log(description)
    const [edit,setEdit] = useState(false)
  return (
    <div className='bg-Paleta1-600 m-1 relative'>
        <button onClick={()=>setEdit(!edit)} className='absolute right-1 top-0'>...</button>
        {edit&&<>
            <div className={`bg-Cfinn-900 opacity-60 h-screen w-screen fixed z-30 left-0 top-0 ${!edit && 'hidden'}`} onClick={()=>setEdit(!edit)}></div>
            <TaskEdit data={data}/>
        </>
        }
        <div className='pt-5 pb-2 px-2'>
        <p className='text-sm font-bold'>{name}</p>
        <div className='flex items-center'>
        <p>{description}</p>
        <input className='w-10 h-5' type="checkbox" value={state} />
        </div>
        <div className='bg-Paleta1-600'>
            {members.map((member,i)=>{
               return <div key={i} className='bg-slate-200'>
                    <div className='h-5 w-5 rounded-full overflow-hidden'>
                        <img src={member.userPhoto} alt="P" />
                    </div>
                    <p className='break-words text-xs'>{member.email}</p>
                </div>
            })}
        </div>
        </div>
    </div>
  )
}
