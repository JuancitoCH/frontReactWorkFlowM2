import {createSlice} from '@reduxjs/toolkit'

const displaySlice = createSlice({
    name:"displays",
    initialState:{
        loginShow:false,
        registerShow:false,
        teamCreatorShow:false,
        Paleta:{t:"Paleta1-100",ttt:"Paleta1-300",s:"Paleta1-600"}
    },
    reducers:{
        loginDisplay(state,action){
            state.loginShow=!state.loginShow
        },
        registerDisplay(state,action){
            state.registerShow=!state.registerShow
        },
        teamCreatorDisplay(state,action){
            state.teamCreatorShow=!state.teamCreatorShow
        }
    }
})

export const {loginDisplay,registerDisplay,teamCreatorDisplay} = displaySlice.actions // Esto se utiliza en el dispatch
export default displaySlice.reducer // Esto en el store