import React, { useState } from 'react'
import TaskEdit from './TaskEdit'
import { useDispatch } from 'react-redux'
import { commentTask,deleteComment } from '../features/teams/teamsSlice'

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
    }
    const deleteCommentPage = (idComment)=>{
        Dispatch(deleteComment({idComment,idTeam,idTask}))
    }

    return (
        <div className='bg-Paleta1-600 m-1 relative'>
            <button onClick={() => setEdit(!edit)} className='absolute right-1 top-0'>...</button>
            {edit && <>
                <div className={`bg-Cfinn-900 opacity-60 h-screen w-screen fixed z-30 left-0 top-0 ${!edit && 'hidden'}`} onClick={() => setEdit(!edit)}></div>
                <TaskEdit data={data} />
            </>
            }
            <div className='pt-5 pb-2 px-2'>
                <p className='text-sm font-bold'>{name}</p>
                <div className='flex items-center'>
                    <p>{description}</p>
                    <input className='w-10 h-5' type="checkbox" value={state} />
                </div>
                <button onClick={() => setCommentsSection(!commentsSection)} className='text-slate-500'>Comments</button>
                {commentsSection &&
                    <div>
                        <form action="" onSubmit={addComment}>
                            <input type="text" name='comment' placeholder='comment....' />
                            <input type="text" name='document' placeholder='document....' />
                            <button>add comment</button>
                        </form>
                        {comments.map(comment => {
                            
                            return <div key={comment._id} className="relative">
                                <button onClick={()=>deleteCommentPage(comment._id)} className='absolute top-0 right-0'>x</button>
                                <p>{comment.comment}</p>
                                <p>{comment.document}</p>
                                <div className='h-5 w-5 rounded-full overflow-hidden'>
                                    <img src={comment.member._id.userPhoto} alt="P" />
                                </div>
                                <p className='break-words text-xs'>{comment.member._id.email}</p>
                            </div>
                        })}
                    </div>
                }

                <div className='bg-Paleta1-600'>
                    {members.map((member, i) => {
                        return <div key={i} className='bg-slate-200'>
                            <div className='h-5 w-5 rounded-full overflow-hidden'>
                                <img src={member.userPhoto} alt="P" />
                            </div>
                            <p className='break-words text-xs'>{member.email}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
