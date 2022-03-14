import {createSlice} from '@reduxjs/toolkit'

const displaySlice = createSlice({
    name:"displays",
    initialState:{
        loginShow:false
    },
    reducers:{
        loginDisplay(state,action){
            state.loginShow=!state.loginShow
        }
    }
})

export const {loginDisplay} = displaySlice.actions // Esto se utiliza en el dispatch
export default displaySlice.reducer // Esto en el store