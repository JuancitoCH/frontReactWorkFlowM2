import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { get, post } from '../../api/axiosConfig'
import {useSelector,useDispatch} from 'react-redux'



export const getTeamsUser = createAsyncThunk('teams/getTeamsUser', async (credentials,thunkAPI)=>{
    const objectData = {
        title:credentials.title,
        // 
        // 
    }
    const {data} = await post('',)
})
export const createTeamUser = createAsyncThunk('teams/createTeamUser', async (credentials,thunkAPI)=>{
   const {data}  = await post('teams/create/team',{
       name:credentials.name,
       description:credentials.description,
       img:credentials.img
   })
   return data
})
export const createList = createAsyncThunk('teams/createList', async (credentials,thunkAPI)=>{
   const {data}  = await post('teams/create/teamlist/'+credentials.idTeam,{
       title:credentials.title,
       description:credentials.description,
       photo:credentials.photo
   })
   return data
})


const teamsSlice = createSlice({
    name:"teams",
    initialState:{
        teams:[],
        changeTeams:1,
        loading: false,
        error: false,
        message: "",
        changeLists:false,
    },
    reducers:{
        setTeams(state,actions){
            state.changeTeams = actions.payload
            console.log(state.changeTeams)
        }
        
    },
    extraReducers(builder){
        builder.addCase(createTeamUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createTeamUser.fulfilled, (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.changeTeams = action.payload
        })


        builder.addCase(createList.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createList.fulfilled, (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.changeLists = action.payload
        })
    }
    
})

export const {setTeams} = teamsSlice.actions // Esto se utiliza en el dispatch son los reducers comunes
export default teamsSlice.reducer // Esto en el store