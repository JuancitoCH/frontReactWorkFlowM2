import {configureStore} from '@reduxjs/toolkit' 
import userReducer from '../features/user/userSlice'
import teamsSlice from '../features/teams/teamsSlice'
import displayReducer from '../features/displays/displaySlice'

const store = configureStore({
    reducer:{
        //TODO:
        user:userReducer,
        displays:displayReducer,
        teams:teamsSlice
    }
})

export default store