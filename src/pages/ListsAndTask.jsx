import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../api/axiosConfig'
import RealList from '../components/RealList'
import ListCreator from '../components/ListCreator'
import {listCreatorDisplay} from '../features/displays/displaySlice'
import {useSelector,useDispatch} from 'react-redux'

export default function ListsAndTask() {

    const {listCreatorShow} = useSelector(state=>state.displays)
    const {changeLists} = useSelector(state=>state.teams)
    const Dispatch = useDispatch()
    const { idTeam } = useParams()
    const [listas, setListas] = useState([])
    useEffect(async () => {
        const { data } = await get('/teams/lists/tasks/' + idTeam)
        if (data.success === false) return setListas([])
        setListas(data)
        // console.log(listas)
    }, [changeLists])

    return (
        <section>
            <div className={`p-5 md:w-[calc(100vw-8rem)] relative w-[calc(100vw-2rem)] md:flex-none flex justify-center min-h-[calc(100vh-2rem)] mt-1 mb-2 bg-gradient-to-b  from-Paleta1-300 via-Paleta1-100 to-Paleta1-600 rounded-sm shadow-xl`}>
                <div className=' md: md: left-2'>
                    <h1>List</h1>
                    <button onClick={()=>Dispatch(listCreatorDisplay())}>+</button>
                </div>
                <div className=' md:overflow-x-scroll md:flex'>
                {listas.map(lista => {
                    return <RealList key={lista._id} title={lista.title} description={lista.description} photo={lista.photo} tasks={lista.tasks} date={lista.date} />
                })}

                </div>
               
            </div>
            <ListCreator />
        </section>
    )
}
