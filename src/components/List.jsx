import React from 'react'

export default function List({image,description,title,idTeam=0}) {
  return (
    <article className='w-48 m-1 flex items-center overflow-hidden flex-col bg-Cwaikawa-gray-700 relative pb-4'>
        <p>{description}</p>
        <div className='w-36 mx-4 mt-2'>
          <img className='' src={image} alt="aqui una iomagen" />
        </div>
        <div className='bg-Ceast-bay-600 w-full flex items-center mt-2 absolute bottom-0'>
          <h1 className='ml-2'>{title}</h1>
          <button className='right-2 absolute '>...</button>
        </div>
    </article>
  )
}
