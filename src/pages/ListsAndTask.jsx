import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../api/axiosConfig'
import RealList from '../components/RealList'
import ListCreator from '../components/ListCreator'
import { listCreatorDisplay } from '../features/displays/displaySlice'
import { useSelector, useDispatch } from 'react-redux'
import { MdOutlineLibraryAdd } from 'react-icons/md'

export default function ListsAndTask() {

    const { listCreatorShow } = useSelector(state => state.displays)
    const { changeLists } = useSelector(state => state.teams)
    const Dispatch = useDispatch()
    const { idTeam } = useParams()
    const [listas, setListas] = useState([])
    useEffect(async () => {
        const { data } = await get('/teams/lists/tasks/' + idTeam)
        if (data.success === false) return setListas([])
        setListas(data)
    }, [changeLists])

    return (
        <section>
            <div className={`p-5 md:w-[calc(100vw-8rem)] relative w-[calc(100vw-2rem)] md:flex-none flex justify-center min-h-[calc(100vh-2rem)] mt-1 mb-2 bg-Cwaikawa-gray-800 rounded-sm shadow-xl`}>
                <div className=' flex absolute left-2 top-0'>
                    <h1 className='text-3xl ml-2  text-white'>Lists</h1>
                    <button className='text-3xl text-Cmaroon-flush-500 hover:text-Cmaroon-flush-300 ' onClick={() => Dispatch(listCreatorDisplay())}><MdOutlineLibraryAdd /></button>
                </div>
                <div className=' md:overflow-x-scroll md:flex mt-2'>
                    {listas.map(lista => {
                        return <RealList key={lista._id} idList={lista._id} title={lista.title} description={lista.description} photo={lista.photo} tasks={lista.tasks} date={lista.date} />
                    })}

                </div>

            </div>
            <ListCreator />
        </section>
    )
}
