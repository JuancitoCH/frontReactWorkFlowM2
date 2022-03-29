import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../api/axiosConfig'
import RealList from '../components/RealList'
import ListCreator from '../components/ListCreator'
import { listCreatorDisplay } from '../features/displays/displaySlice'
import { useSelector, useDispatch } from 'react-redux'
import { MdOutlineLibraryAdd } from 'react-icons/md'

export default function ListsAndTask() {

    // const { listCreatorShow } = useSelector(state => state.displays)
    const { changeLists } = useSelector(state => state.teams)
    const Dispatch = useDispatch()
    const { idTeam } = useParams()
    const [listas, setListas] = useState([])
    const [roleUserTeam,setRoleUserTeam]=useState('')
    // https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60
    useEffect(async () => {
        const { data } = await get('/teams/lists/tasks/' + idTeam)
        const { data:role } = await get('/teams/member/role/' + idTeam)
        setRoleUserTeam(role)
        if (data.success === false) return setListas([])
        setListas(data)
    }, [changeLists])
    return (
        <section>
            <div className={`p-5 md:w-[calc(100vw-8rem)] relative w-[calc(100vw-2rem)] md:flex-none flex justify-center min-h-[calc(100vh-2rem)] mt-1 mb-2 bg-gbluebell-300 rounded-sm shadow-xl`}>
                <div className=' flex absolute left-2 top-0'>
                    <h1 className='text-3xl ml-2  text-gmorado-900'>Lists</h1>
                    <button className='text-3xl text-gbluebell-900 hover:text-gamarillo-500 ' onClick={() => Dispatch(listCreatorDisplay())}><MdOutlineLibraryAdd /></button>
                </div>
                <div className='absolute right-1 text-xl text-white font-bold top-1'>
                    <p className='text-gmorado-600'>{roleUserTeam}</p>
                </div>
                <div className=' md:overflow-x-scroll  md:flex mt-4 min-w-full pb-1'>
                    {listas.map(lista => {
                        return <RealList key={lista._id} idList={lista._id} title={lista.title} description={lista.description} photo={lista.photo} tasks={lista.tasks} date={lista.date} />
                    })}

                </div>

            </div>
            
            <ListCreator />
        </section>
    )
}
