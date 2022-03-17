import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { get, post } from '../../api/axiosConfig'

export const getTeamsUser = createAsyncThunk('teams/getTeamsUser', async (credentials,thunkAPI)=>{
    const objectData = {
        title:credentials.title,
        // 
        // 
    }
    const {data} = await post('',)
})

const teamsSlice = createSlice({
    name:"teams",
    initialState:{
        teams:[]
    },
    reducers:{
        
    },
    extraReducers(builder){
        builder.addCase(getTeamsUser.pending, (state, action) => {
            state.loading = true
        })
    }
    
})

// export const {loginDisplay} = displaySlice.actions // Esto se utiliza en el dispatch son los reducers comunes
export default teamsSlice.reducer // Esto en el store