import React, { useEffect, useState } from 'react'
import TeamsCreator from '../components/TeamsCreator'
import {useSelector,useDispatch} from 'react-redux'
import {teamCreatorDisplay} from '../features/displays/displaySlice'
import {get} from '../api/axiosConfig'
import List from '../components/List'
import {MdOutlineLibraryAdd} from 'react-icons/md'


export default function Teams() {
  const [teams,setTeams] = useState([])
  const {logged} = useSelector(state=>state.user)
  const {changeTeams} = useSelector(state=>state.teams)
  const {teamCreatorShow} = useSelector(state=>state.displays)
  const Dispatch = useDispatch()
  useEffect(async()=>{
    if(logged){
      const {data} = await get('/teams/')
      // console.log(logged)
      // console.log(data)
      return setTeams(data)
    }
    setTeams([])
  },[logged,changeTeams])

  const displayCreator=()=>{
    Dispatch(teamCreatorDisplay())
  }
  return (
    <>
    <TeamsCreator/>
    <div className={`w-[calc(100%-2rem)] h-[calc(100%-.5rem)] mt-1 mb-2 bg-gradient-to-b  from-Paleta1-300 via-Paleta1-100 to-Paleta1-600 rounded-sm shadow-xl`}>
        <div className='flex'>
        <h1 className='text-3xl ml-2 mr-2'>Teams</h1>
        <button onClick={displayCreator} className='text-3xl text-Paleta1-100 hover:text-red-500 '><MdOutlineLibraryAdd/></button>
        </div>
        <div className='flex justify-center rounded-sm shadow-lg'>
          
            {teams.length>0&&teams.map((team,index)=>{ return <List key={index} image={team.img} description={team.description} title={team.name} />})}
        </div>
    </div>
    </>
  )
}
