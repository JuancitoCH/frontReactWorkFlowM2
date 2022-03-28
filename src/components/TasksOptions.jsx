import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { setChangeList, updateList } from '../features/teams/teamsSlice'
import { post } from '../api/axiosConfig'


export default function TasksOptions({idTeam,idList,data}) {
    const [addTask, setAddTask] = useState(false)
    const [editList, setEditList] = useState(false)
    const createtask = async (e) => {
        e.preventDefault()
        const { data } = await post('/teams/create/task/' + idTeam, {
            idList,
            name: e.target.name.value,
            description: e.target.description.value
        })
        Dispatch(setChangeList(data))
    }
    const updateListEvent = (e) => {
        e.preventDefault()
        Dispatch(updateList({
            idTeam,
            idList,
            description: e.target.description.value,
            title: e.target.title.value,
            photo: e.target.photo.value
        }))
    }
    const Dispatch = useDispatch()

    return (
        <div>
            <div className={`absolute bg-white flex flex-col z-40 `}>
                <button className='' onClick={() => { setAddTask(!addTask) }}>add Task</button>
                <button className='' onClick={() => { setEditList(!editList) }}>Edit list</button>
            </div>
            <div className={` absolute p-5 bg-slate-500 left-40 z-50 ${!addTask && "hidden"}`}>
                <button className='asbsolute right-0' onClick={() => setAddTask(!addTask)}>x</button>
                <form className='' action="" onSubmit={createtask}>
                    <input name='name' type="text" placeholder='name...' />
                    <input name='description' type="text" placeholder='description...' />
                    <button>send</button>
                </form>
            </div>

            <div className={` absolute p-5 bg-slate-500 left-40 z-50 ${!editList && "hidden"}`}>
                <button className='asbsolute right-0' onClick={() => setEditList(!editList)}>x</button>
                <form className='' action="" onSubmit={updateListEvent}>
                    <input name='title' type="text" placeholder='title...' defaultValue={data.title} />
                    <input name='description' type="text" placeholder='description...' defaultValue={data.description} />
                    <input name='photo' type="text" placeholder='url...' defaultValue={data.photo} />
                    <button onClick={() => setEditList(!editList)}>Update</button>
                </form>
            </div>
        </div>
    )
}
