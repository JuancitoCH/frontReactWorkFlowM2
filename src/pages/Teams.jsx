import React, { useEffect, useState } from 'react'
import TeamsCreator from '../components/TeamsCreator'
import {useSelector,useDispatch} from 'react-redux'
import {teamCreatorDisplay} from '../features/displays/displaySlice'
import {get} from '../api/axiosConfig'
import OneTeam from '../components/OneTeam'
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
      console.log(data)
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
    <div className={`w-[calc(100%-2rem)] min-h-[calc(100vh-2rem)] mt-1 mb-2 bg-gbluebell-300 rounded-sm shadow-xl`}>
        <div className='flex'>
        <h1 className='text-3xl ml-2 mr-2 text-gmorado-900'>Teams</h1>
        <button onClick={displayCreator} className='text-3xl text-gbluebell-900 hover:text-gamarillo-500'><MdOutlineLibraryAdd/></button>
        </div>
        <div className='flex justify-center flex-wrap '>
            {/* {console.log(teams)} */}
            {teams.length>0&&teams.map((team,index)=>{ return <OneTeam key={index} image={team.img} description={team.description} title={team.name} idTeam={team._id} members={team.members} leader={team.leader}/>})}
        </div>
    </div>
    </>
  )
}
