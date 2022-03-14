import React from 'react'
import {useSelector} from "react-redux"
export default function AlertError() {
    const {error,message} = useSelector(state=>{return{error:state.user.error,message:state.user.message}})
  return (
    <div className={`fixed right-4 top-3 bg-red-300 text-white ${!error&&"hidden"} z-50 px-3 pt-1 pb-3 rounded-sm max-w-fit`}>
        <div className='flex items-center'>
        <img className="w-10" src="https://cdn2.iconfinder.com/data/icons/flat-and-simple-part-4/128/message_alert-512.png" alt="" />
        <p className=''>Alert</p>
        </div>
        <p className='text-sm'>{message}</p>
    </div>

  )
}
