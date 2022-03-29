import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {listCreatorDisplay} from '../features/displays/displaySlice'
import { useParams } from 'react-router-dom'
import {createList} from '../features/teams/teamsSlice'
import {GrFormClose} from 'react-icons/gr'

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
    <div onClick={()=>Dispatch(listCreatorDisplay())} className={`bg-gmoradoclaro-700 opacity-50 h-screen w-screen fixed z-30 left-0 top-0 ${!listCreatorShow&&'hidden'} `}></div>
    <div className={`fixed top-10 left-44 bg-white p-2 rounded-sm z-50 text-gmorado-900 border border-grosa1-50 ${!listCreatorShow&&'hidden'} `}>
        <button className='absolute right-1' onClick={()=>Dispatch(listCreatorDisplay())}><GrFormClose/></button>
        <h2 className='text-xl font-semibold my-3'>ListCreator</h2>
        <form className='flex flex-col' onSubmit={send} action="">
            <input  name='title' type="text" placeholder='Title...'/>
            <input  name='description' type="text" placeholder='Description...'/>
            <input  name='photo' type="text" placeholder='Photo...'/>
            <button className='bg-grosa1-50 rounded-b-md text-white hover:bg-gbluebell-700 transition-colors ease-in  ' >Create</button>
        </form>

    </div>
    </>
  )
}
