import React, { useRef, useState } from 'react'
import { updateTeam } from '../features/teams/teamsSlice'
import { teamCreatorDisplayToUpdate } from '../features/displays/displaySlice'
import { useDispatch,useSelector } from 'react-redux'
import List from './OneTeam'


export default function TeamsCreatorToUpdate({idTeam,data}) {
  const title = useRef()
  const Dispatch = useDispatch()
  const description = useRef()
  const image = useRef()
  const [TeamCreator, setTeamCreator] = useState({ title: data.title,description:data.description,image:data.image })
  
  const createTeam = (e) => {
    e.preventDefault()
    if (!(e.target.name.value && e.target.description.value && e.target.img.value)) return console.log("nono")
    Dispatch(updateTeam({
      idTeam,
      name: e.target.name.value,
      description: e.target.description.value,
      img: e.target.img.value
    }))
  }
  

  return (
    <>
    <div className={`fixed top-10 left-1/3 flex flex-row text-gmorado-900 bg-gbluebell-500 z-30 rounded-sm shadow-lg`}>
      <div className=''>
        <form action="" onSubmit={createTeam}>
          <h1 className='text-xl text-white font-bold'>Update Team</h1>
          <input name='name' className='block' ref={title} onChange={() => setTeamCreator({ ...TeamCreator, title: title.current.value })} defaultValue={data.title} type="text" placeholder='Title...' />
          <input name='description' className='block' ref={description} onChange={() => setTeamCreator({ ...TeamCreator, description: description.current.value })} defaultValue={data.description} type="text" placeholder='Description...' />
          <input name='img' className='block' ref={image} onChange={() => setTeamCreator({ ...TeamCreator, image: image.current.value })} defaultValue={data.image} type="text" placeholder='Cover Url...' />
          <button className='hover:bg-gmorado-900 px-3 py-1 rounded-b-md  bg-grosa1-100 text-white'>Update</button>
        </form>
      </div>
      <div className=''>

      <List image={TeamCreator.image} description={TeamCreator.description} title={TeamCreator.title} />
      </div>
      
    </div>
    </>
  )
}
