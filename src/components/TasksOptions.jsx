import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { setChangeList } from '../features/teams/teamsSlice'
import { post } from '../api/axiosConfig'


export default function TasksOptions({idTeam,idList}) {
    const [addTask, setAddTask] = useState(false)
    const createtask = async (e) => {
        e.preventDefault()
        const { data } = await post('/teams/create/task/' + idTeam, {
            idList,
            name: e.target.name.value,
            description: e.target.description.value
        })
        Dispatch(setChangeList(data))
    }
    const Dispatch = useDispatch()

    return (
        <div>
            <div className={`absolute bg-white flex flex-col z-40 `}>
                <button className='' onClick={() => { setAddTask(!addTask) }}>add Task</button>
                <button className='' onClick={() => { setAddTask(!addTask) }}>Edit list</button>
            </div>
            <div className={` absolute p-5 bg-slate-500 left-40 z-50 ${!addTask && "hidden"}`}>
                <button className='asbsolute right-0' onClick={() => setAddTask(!addTask)}>x</button>
                <form className='' action="" onSubmit={createtask}>
                    <input name='name' type="text" placeholder='name...' />
                    <input name='description' type="text" placeholder='description...' />
                    <button>send</button>
                </form>
            </div>
        </div>
    )
}
