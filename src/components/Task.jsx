import React from 'react'

export default function Task({data}) {
    const {description,members,state,name,idList,_id:idTask,} = data
    // console.log(data)
    // console.log(description)
  return (
    <div className='bg-Paleta1-600 m-1 relative'>
        <button className='absolute right-1 top-0'>...</button>
        <div className='pt-5 pb-2 px-2'>
        <div className='flex items-center'>
        <p>{description}</p>
        <input className='w-10 h-5' type="checkbox" value={state} />
        </div>
        <div className='bg-Paleta1-600'>
            {members.map(member=>{
               return <div className='bg-slate-200'>
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
