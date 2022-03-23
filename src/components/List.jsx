import React from 'react'

export default function List({image,description,title,idTeam=0}) {
  return (
    <article className='w-80 m-1 flex items-center flex-col bg-Paleta1-100 rounded-sm relative pb-4'>
        <p className=''>{description}</p>
        <div className='mt-2 '>
          {image?<img className='bg-cover' src={image} alt="img" />:<div className='bg-gradient-to-br from-Cfinn-500 to-Cmaroon-flush-500 w-36 h-40'></div>}
          
        </div>
        <div className='text-Paleta1-100 bg-Paleta1-300 w-full flex items-center mt-2 absolute bottom-0'>
          <h1 className='ml-2'>{title}</h1>
          <button className='right-2 absolute '>...</button>
        </div>
    </article>
  )
}
