import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { post } from '../../api/axiosConfig'

export const createTeamUser = createAsyncThunk('teams/createTeamUser', async (credentials, thunkAPI) => {
    const { data } = await post('teams/create/team', {
        name: credentials.name,
        description: credentials.description,
        img: credentials.img
    })
    if (data.success === false) {
        thunkAPI.rejectWithValue(data)
    }
    return data
})
export const createList = createAsyncThunk('teams/createList', async (credentials, thunkAPI) => {
    const { data } = await post('teams/create/teamlist/' + credentials.idTeam, {
        title: credentials.title,
        description: credentials.description,
        photo: credentials.photo
    })

    if (data.success === false) {
        thunkAPI.rejectWithValue(data)
    }
    //    if(!data.success){
    //       return thunkAPI.rejectWithValue(data)
    //    }
    return data
})

export const deleteMemberTeam = createAsyncThunk('teams/deleteMemberTeam', async (credentials, thunkAPI) => {
    const { data } = await post('teams/delete/member/' + credentials.idTeam, {
        idUser: credentials.idUser
    })
    if (!data.success) {
        thunkAPI.rejectWithValue(data)
    }
    return data
})
export const updateTask = createAsyncThunk('teams/updateTask', async (credentials, thunkAPI) => {
    const { data } = await post('teams/update/task/global/' + credentials.idTeam, {
        idTask: credentials.idTask,
        name: credentials.name,
        description: credentials.description
    })
    // console.log(data)
    if (data.success === false) {
        thunkAPI.rejectWithValue(data)
    }
    return data
})
export const updateTeam = createAsyncThunk('teams/updateTeam', async (credentials, thunkAPI) => {
    const { data } = await post('teams/update/team/' + credentials.idTeam, {
        img: credentials.img,
        name: credentials.name,
        description: credentials.description
    })
    // console.log(data)
    if (data.success === false) {
        thunkAPI.rejectWithValue(data)
    }
    return data
})

export const commentTask = createAsyncThunk('teams/commentTask', async (credentials, thunkAPI) => {
    const { data } = await post('teams/create/comment/task/' + credentials.idTeam, {
        idTask: credentials.idTask,
        comment: credentials.comment,
        document: credentials.document
    })
    if (data.success === false) {
        thunkAPI.rejectWithValue(data)
    }
    return data
})
export const deleteComment = createAsyncThunk('teams/deleteComment', async (credentials, thunkAPI) => {
    const { data } = await post('teams/delete/comment/task/' + credentials.idTeam, {
        idComment: credentials.idComment,
        idTask: credentials.idTask
    })
    console.log(data)
    if (data.success === false) {
        thunkAPI.rejectWithValue(data)
    }
    return data
})
export const deleteTaskMember = createAsyncThunk('teams/deleteTaskMember', async (credentials, thunkAPI) => {
    const { data } = await post('teams/delete/task/member/' + credentials.idTeam, {
        idTask: credentials.idTask,
        idUser: credentials.idUser
    })
    // console.log(data)
    if (data.success === false) {
        thunkAPI.rejectWithValue(data)
    }
    return data
})
export const addTaskMember = createAsyncThunk('teams/addTaskMember', async (credentials, thunkAPI) => {
    const { data } = await post('teams/update/task/member/' + credentials.idTeam, {
        idTask: credentials.idTask,
        idUser: credentials.idUser
    })
    // console.log(data)
    if (data.success === false) {
        thunkAPI.rejectWithValue(data)
    }
    return data
})

export const updateList = createAsyncThunk('teams/updateList', async (credentials, thunkAPI) => {
    const { data } = await post('teams/update/teamlist/' + credentials.idTeam, {
        idList: credentials.idList,
        description: credentials.description,
        title: credentials.title,
        photo: credentials.photo
    })
    // console.log(data)
    if (data.success === false) {
        thunkAPI.rejectWithValue(data)
    }
    return data
})

const teamsSlice = createSlice({
    name: "teams",
    initialState: {
        teams: [],
        changeTeams: 1,
        loading: false,
        error: false,
        message: "",
        changeLists: false,
        lists: []
    },
    reducers: {
        setTeams(state, actions) {
            state.changeTeams = actions.payload
            state.teams = actions.payload
            // console.log(state.changeTeams)
        },
        setChangeList(state, actions) {
            state.changeLists = !state.changeLists
        },
        setChangeTeams(state, actions) {
            state.changeTeams = actions.payload
        }

    },
    extraReducers(builder) {
        builder.addCase(createTeamUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createTeamUser.fulfilled, (state, action) => {
            state.loading = false
            // console.log(action.payload)
            state.changeTeams = action.payload
        })
        builder.addCase(createTeamUser.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })

        
        builder.addCase(updateTeam.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(updateTeam.fulfilled, (state, action) => {
            state.loading = false
            // console.log(action.payload)
            state.changeTeams = action.payload
        })
        builder.addCase(updateTeam.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })


        builder.addCase(updateTask.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(updateTask.fulfilled, (state, action) => {
            state.loading = false
            // console.log(action.payload)
            state.changeLists = !state.changeLists
        })
        builder.addCase(updateTask.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })

        builder.addCase(commentTask.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(commentTask.fulfilled, (state, action) => {
            state.loading = false
            // console.log(action.payload)
            state.changeLists = !state.changeLists
        })
        builder.addCase(commentTask.rejected, (state, action) => {
            console.log(action)
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })

        builder.addCase(deleteComment.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteComment.fulfilled, (state, action) => {
            state.loading = false
            // console.log(action.payload)
            state.changeLists = !state.changeLists
        })
        builder.addCase(deleteComment.rejected, (state, action) => {
            console.log(action)
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })


        builder.addCase(updateList.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(updateList.fulfilled, (state, action) => {
            state.loading = false
            // console.log(action.payload)
            state.changeLists = !state.changeLists
        })
        builder.addCase(updateList.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })

        builder.addCase(addTaskMember.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(addTaskMember.fulfilled, (state, action) => {
            state.loading = false
            // console.log(action.payload)
            state.changeLists = !state.changeLists
        })
        builder.addCase(addTaskMember.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })



        builder.addCase(deleteTaskMember.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteTaskMember.fulfilled, (state, action) => {
            state.loading = false
            // console.log(action.payload)
            state.changeLists = !state.changeLists
        })
        builder.addCase(deleteTaskMember.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })


        builder.addCase(deleteMemberTeam.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteMemberTeam.fulfilled, (state, action) => {
            state.loading = false
            // console.log(action.payload)
            state.changeTeams = action.payload.success
        })
        builder.addCase(deleteMemberTeam.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })


        builder.addCase(createList.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createList.fulfilled, (state, action) => {
            state.loading = false
            // console.log(action.payload)
            state.changeLists = !state.changeLists
            state.lists = action.payload
        })
        builder.addCase(createList.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.message = action.payload.message

        })
    }

})

export const { setTeams, setChangeList, setChangeTeams } = teamsSlice.actions // Esto se utiliza en el dispatch son los reducers comunes
export default teamsSlice.reducer // Esto en el store