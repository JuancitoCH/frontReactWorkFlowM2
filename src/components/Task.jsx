import React, { useState } from 'react'
import TaskEdit from './TaskEdit'
import { useDispatch } from 'react-redux'
import { commentTask,deleteComment } from '../features/teams/teamsSlice'
import {GrFormClose} from 'react-icons/gr'
import {FiMoreHorizontal} from 'react-icons/fi'



export default function Task({ data,idTeam }) {
    const { description, members, state, name, idList, _id: idTask, comments } = data
    // console.log(description)
    const [edit, setEdit] = useState(false)
    const [commentsSection, setCommentsSection] = useState(false)
    const Dispatch = useDispatch()

    const addComment = (e)=>{
        e.preventDefault()
        Dispatch(commentTask({
            idTeam,
            idTask,
            comment:e.target.comment.value,
            document:e.target.document.value,
        }))
        e.target.comment.value=""
        e.target.document.value=""
        // setCommentsSection(!commentsSection)
    }
    const deleteCommentPage = (idComment)=>{
        Dispatch(deleteComment({idComment,idTeam,idTask}))
    }
    const errorImg=(e)=>{
        console.log(e)
        e.target.style = "display:none"
        return e.target.onError=null
    }

    return (
        <div className='bg-white rounded-2xl m-1 text-gmorado-700 relative shadow-lg'>
            <button onClick={() => setEdit(!edit)} className='absolute right-2 top-2'><FiMoreHorizontal/></button>
            {edit && <>
                <div className={`bg-gmoradoclaro-700 opacity-50 h-screen w-screen fixed z-30 left-0 top-0 ${!edit && 'hidden'}`} onClick={() => setEdit(!edit)}></div>
                <TaskEdit data={data} />
            </>
            }
            <div className='pt-5 pb-2 px-2'>
                <p className='text-sm font-bold'>{name}</p>
                <div className='flex items-center'>
                    <p>{description}</p>
                    <input className='w-10 h-5' type="checkbox" value={state} />
                </div>
               <div className='bg-gmoradoclaro-50 h-1 rounded-2xl my-3'></div>
                <div className='bg-Paleta1-600'>
                    {members.map((member, i) => {
                        return <div key={i} className='flex bg-white'>
                            <div className='h-5 w-5 rounded-full overflow-hidden bg-grosa1-50'>
                                <img src={member.userPhoto ? member.userPhoto : "a" } alt="P" onError={errorImg} />
                            </div>
                            <p className='break-words text-xs'>{member.email}</p>
                        </div>
                    })}
                </div>
                <button className="text-sm ml-2 hover:text-grosa1-200" onClick={() => setCommentsSection(!commentsSection)}>Comments</button>
                {commentsSection &&
                    <div className='ml-2 text-sm'>
                        
                        <form action="" className='' onSubmit={addComment}>
                            <input type="text" name='comment' placeholder='comment....' />
                            <input type="text" name='document' placeholder='document....' />
                            <button className='hover:text-grosa1-50'>Add comment</button>
                        </form>
                        {comments.map(comment => {
                            
                            return <div key={comment._id} className="relative flex items-center bg-gmoradoclaro-400 rounded-xl p-1">
                                <button onClick={()=>deleteCommentPage(comment._id)} className='absolute top-1 right-1 '><GrFormClose/></button>
                                <div className='h-3 w-3 rounded-full overflow-hidden bg-grosa1-50 mr-1'>
                                    <img src={comment.member._id.userPhoto ? comment.member._id.userPhoto : "a" } alt="P" onError={errorImg} />
                                </div>
                                <p>{comment.comment}</p>
                                <p>{comment.document}</p>
                                <p className='break-words text-xs'>{comment.member._id.email}</p>
                            </div>
                        })}
                    </div>
                }
               

            </div>
        </div>
    )
}
