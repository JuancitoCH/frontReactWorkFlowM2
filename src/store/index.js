import {configureStore} from '@reduxjs/toolkit' 
import userReducer from '../features/user/userSlice'
import displayReducer from '../features/displays/displaySlice'

const store = configureStore({
    reducer:{
        //TODO:
        user:userReducer,
        displays:displayReducer
    }
})

export default store