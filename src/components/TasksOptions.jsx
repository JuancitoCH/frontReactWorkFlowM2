import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { setChangeList, updateList } from '../features/teams/teamsSlice'
import { post } from '../api/axiosConfig'
import {GrFormClose} from 'react-icons/gr'


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
            <div className={`absolute flex flex-col rounded-sm z-40 bg-white text-gmorado-900 text-center `}>
                <button className='hover:bg-gbluebell-700 hover:text-white transition-colors ease-in p-2' onClick={() => { setAddTask(!addTask) }}>add Task</button>
                <button className='hover:bg-gbluebell-700 hover:text-white transition-colors ease-in p-2' onClick={() => { setEditList(!editList) }}>Edit list</button>
            </div>
            <div className={` bg-white rounded-xl overflow-hidden text-center left-20 z-50 absolute text-gmorado-900 border-grosa1-50 border-2 p-2 ${!addTask && "hidden"}`}>
                <button className='absolute right-1' onClick={() => setAddTask(!addTask)}><GrFormClose/></button>
                <form className='' action="" onSubmit={createtask}>
                    <input name='name' type="text" placeholder='name...' />
                    <input name='description' type="text" placeholder='description...' />
                    <button className='hover:text-grosa1-50 font-semibold '>Add</button>
                </form>
            </div>

            <div className={` bg-white rounded-xl overflow-hidden text-center left-20 z-50 absolute text-gmorado-900 border-grosa1-50 border-2 p-2 ${!editList && "hidden"}`}>
                <button className='absolute right-1' onClick={() => setEditList(!editList)}><GrFormClose/></button>
                <form className='' action="" onSubmit={updateListEvent}>
                    <input name='title' type="text" placeholder='title...' defaultValue={data.title} />
                    <input name='description' type="text" placeholder='description...' defaultValue={data.description} />
                    <input name='photo' type="text" placeholder='url...' defaultValue={data.photo} />
                    <button className='hover:text-grosa1-50 font-semibold ' onClick={() => setEditList(!editList)}>Update</button>
                </form>
            </div>
        </div>
    )
}
