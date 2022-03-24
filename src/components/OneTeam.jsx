import React from 'react'
import {Link} from 'react-router-dom'
export default function OneTeam({image,description,title,idTeam=0}) {
  return (
    <article className='w-80 m-1 flex items-center flex-col bg-Paleta1-100 rounded-sm relative pb-4  shadow-lg'>
      <Link to={"/teams/list/"+idTeam}>
        <p className=''>{description}</p>
        <div className='flex mt-2 w-80 h-80 items-center overflow-hidden '>
          {image?<img className='object-cover h-full w-full  transition ease-out delay-100 duration-1000 hover:translate-y-3 ' src={image} alt="img" />:<div className='bg-gradient-to-br from-Cfinn-500 to-Cmaroon-flush-500 w-36 h-40'></div>}
          
        </div>
      </Link>
        <div className='text-Paleta1-100 bg-Paleta1-300 w-full flex items-center mt-2 absolute bottom-0'>
          <h1 className='ml-2'>{title}</h1>
          <button className='right-2 absolute '>...</button>
        </div>
    </article>
  )
}
