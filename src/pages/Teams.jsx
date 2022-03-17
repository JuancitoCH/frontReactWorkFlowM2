import React, { useEffect, useState } from 'react'
import List from '../components/List'
import TeamsCreator from '../components/TeamsCreator'
export default function Teams() {
  const [teams,setTeams] = useState([])
  useEffect(()=>{
    setTeams([
      {
      image:"https://victorroblesweb.es/wp-content/uploads/2018/01/nodejs-victorroblesweb.png",
      description:"Algunas sadaskldnasd asdasdnjiqwqopnqwk 12312 3",
      title:"Titulo"
    },
    {
      image:"https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png",
      description:"Algunas sadaskldnasd asdasdnjiqwqopnqwk 12312 3",
      title:"Titulo"
    },
  ])
  },[])
  
  return (
    <>
    <TeamsCreator/>
    <div className='w-[calc(100%-2rem)] h-[calc(100%-.5rem)] mt-1 mb-2 bg-Cwaikawa-gray-800 text-slate-200'>
        <div className='flex items-center'>
        <h1 className='text-xl ml-2 mr-2'>Teams</h1>
        <button className='text-2xl rounded-full bg-slate-500'>+</button>
        </div>
        <div className=' flex flex-wrap justify-center rounded-sm shadow-lg'>
            {teams.map((team,index)=>{ return <List key={index} image={team.image} description={team.description} title={team.title} />})}
        </div>
    </div>
    </>
  )
}
