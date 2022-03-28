import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {listCreatorDisplay} from '../features/displays/displaySlice'
import { useParams } from 'react-router-dom'
import {createList} from '../features/teams/teamsSlice'
export default function ListCreator() {
    const {listCreatorShow} = useSelector(state=>state.displays)
    const Dispatch = useDispatch()
    const {idTeam}= useParams()

    const send=(e)=>{
      e.preventDefault()
      Dispatch(createList({
        idTeam:idTeam,
        title:e.target.title.value,
        description:e.target.description.value,
        photo:e.target.photo.value
      }))
      // console.log(idTeam)
    }
    
  return (
    <>
    <div onClick={()=>Dispatch(listCreatorDisplay())} className={`bg-Cfinn-900 opacity-60 h-screen w-screen fixed z-30 left-0 top-0 ${!listCreatorShow&&'hidden'} `}></div>
    <div className={`absolute top-0 right-8 bg-red-400 z-50 ${!listCreatorShow&&'hidden'} `}>
        <button onClick={()=>Dispatch(listCreatorDisplay())}>x</button>
        <h2>ListCreator</h2>
        <form className='flex flex-col' onSubmit={send} action="">
            <input  name='title' type="text" placeholder='Title...'/>
            <input  name='description' type="text" placeholder='Description...'/>
            <input  name='photo' type="text" placeholder='Photo...'/>
            <button >Create</button>
        </form>

    </div>
    </>
  )
}
