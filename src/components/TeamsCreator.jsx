import React, { useRef, useState } from 'react'
import { setTeams, createTeamUser } from '../features/teams/teamsSlice'
import { teamCreatorDisplay } from '../features/displays/displaySlice'
import { useDispatch,useSelector } from 'react-redux'
import List from './List'
export default function TeamsCreator() {
  const title = useRef()
  const Dispatch = useDispatch()
  const {teamCreatorShow} = useSelector(state=>state.displays)
  const description = useRef()
  const image = useRef()
  const [TeamCreator, setTeamCreator] = useState({ title: "" })

  const createTeam = (e) => {
    e.preventDefault()
    if (!(e.target.name.value && e.target.description.value && e.target.img.value)) return console.log("nono")
    Dispatch(createTeamUser({
      name: e.target.name.value,
      description: e.target.description.value,
      img: e.target.img.value
    }))
  }
  const display=()=>{
    Dispatch(teamCreatorDisplay())
  }

  return (
    
    <div className={`absolute ${teamCreatorShow?"grid":"hidden"}  bg-slate-400 z-30 grid-cols-2 right-0`}>
      <button onClick={display} className='absolute right-0 z-10'>x</button>
      <div>
        <form action="" onSubmit={createTeam}>
          <h1 className='text-xl font-bold'>Team Creator</h1>
          <input name='name' className='block' ref={title} onChange={() => setTeamCreator({ ...TeamCreator, title: title.current.value })} type="text" placeholder='Title...' />
          <input name='description' className='block' ref={description} onChange={() => setTeamCreator({ ...TeamCreator, description: description.current.value })} type="text" placeholder='Description...' />
          <input name='img' className='block' ref={image} onChange={() => setTeamCreator({ ...TeamCreator, image: image.current.value })} type="text" placeholder='Cover Url...' />
          <button>Crear</button>
        </form>
      </div>
      <List image={TeamCreator.image} description={TeamCreator.description} title={TeamCreator.title} />
      <button onClick={display} className=''>Cancel</button>

    </div>
  )
}
