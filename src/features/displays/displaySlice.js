import {createSlice} from '@reduxjs/toolkit'

const displaySlice = createSlice({
    name:"displays",
    initialState:{
        loginShow:false,
        registerShow:false,
    },
    reducers:{
        loginDisplay(state,action){
            state.loginShow=!state.loginShow
        },
        registerDisplay(state,action){
            state.registerShow=!state.registerShow
        }
    }
})

export const {loginDisplay,registerDisplay} = displaySlice.actions // Esto se utiliza en el dispatch
export default displaySlice.reducer // Esto en el store