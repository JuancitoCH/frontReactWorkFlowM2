import React,{useRef, useState} from 'react'
import List from './List'
export default function TeamsCreator() {
    const title = useRef()
    const description = useRef()
    const image = useRef()
    const [TeamCreator,setTeamCreator] = useState({title:""})
  return (
    <div className='absolute grid bg-slate-400 z-30 grid-cols-2 right-0'>
      <button className='absolute right-0 z-10'>x</button>
      <div>
        <h1 className='text-xl font-bold'>Team Creator</h1>
        <input className='block' ref={title} onChange={()=>setTeamCreator({...TeamCreator,title:title.current.value})} type="text" placeholder='Title...'/>
        <input className='block' ref={description} onChange={()=>setTeamCreator({...TeamCreator,description:description.current.value})} type="text" placeholder='Description...'/>
        <input className='block' ref={image} onChange={()=>setTeamCreator({...TeamCreator,image:image.current.value})} type="text" placeholder='Cover Url...'/>
        <button>Crear</button>
      </div>
        <List image={TeamCreator.image} description={TeamCreator.description} title={TeamCreator.title}/>
    </div>
  )
}
