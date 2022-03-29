import React from 'react'
import {useSelector} from "react-redux"
import {FiAlertCircle} from "react-icons/fi"
export default function AlertErrorTeams() {
    const {error,message} = useSelector(state=>{return{error:state.teams.error,message:state.teams.message}})
  return (
    <div className={`animate-pulse fixed right-4 top-3 bg-red-300 text-white ${!error&&"hidden"} z-50 px-3 pt-1 pb-3 rounded-sm max-w-fit`}>
        <div className='flex items-center'>
        {/* <img className="w-10" src="https://cdn2.iconfinder.com/data/icons/flat-and-simple-part-4/128/message_alert-512.png" alt="" /> */}
        <FiAlertCircle className='w-8 h-8 mr-4'/>
        <p className='text-lg mr-4'>Message</p>
        </div>
        <p className='text-sm'>{message}</p>
    </div>

  )
}
