import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


export const login = createAsyncThunk("user/login",async (credentials,thunkAPI)=>{
    // console.log(credentials)
    const response = await fetch("https://mushokuserverjuancito2022.herokuapp.com/authenticate/login",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:credentials.email,
                password:credentials.password
            })
        })
        const data = await response.json()
        console.log(data)
        if(data.success===false){
            return thunkAPI.rejectWithValue(data)
        }
        // console.log(data)

    //action.payload del reducer (fullfilled)
    return data
})

export const validate = createAsyncThunk("user/validate",async (params,thunkAPI)=>{
    const response = await fetch("https://mushokuserverjuancito2022.herokuapp.com/authenticate/validate",{
      method:"POST",
      credentials:'include'
    })

    const data = await response.json()

    console.log(data)
    if(!data.logged){
        console.log("Lanzando error...")
        return thunkAPI.rejectWithValue("Error de loggeo")
    }

    return data
})

// export const validate = createAsyncThunk("user/validate",(params,thunkAPI)=>{
//     return axios.post("https://backendtzuzulcode.wl.r.appspot.com/auth/validate",{
//       method:"POST",
//       credentials:'include'
//     })
//     .then(res=>res.json())
//     .then(data=>thunkAPI.fulfillWithValue(data))
//     .catch(error=>thunkAPI.rejectWithValue("Error de loggeo"))
// })


const userSlice = createSlice({
    name:"user",
    initialState:{
        logged:false,
        name:"",
        loading:false,
        error:true,
        message:""
    },
    reducers:{
        logout(state,action){
            state.logged = false
            state.name = ""
        },
        loadingChange(state,action){
            state.loading= !state.loading
        }
    },
    // Thunks
    extraReducers(builder){
        builder.addCase(login.pending,(state,action)=>{
            state.loading=true
        })

        builder.addCase(login.fulfilled,(state,action)=>{
            state.loading = false
            state.logged = true
            state.error = false
            state.name = action.payload.user.userName
        })

        builder.addCase(login.rejected,(state,action)=>{
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })


        builder.addCase(validate.pending,(state,action)=>{
            state.loading = true
        })

        builder.addCase(validate.fulfilled,(state,action)=>{
            state.logged = true
            state.name = action.payload?.user?.firstName
            state.error = false
        })

        builder.addCase(validate.rejected,(state,action)=>{
            console.log(action.payload)
            state.error = true
            state.logged = false
            state.message= "Error"
        })
    }
})

export const {logout,loadingChange} = userSlice.actions // Esto se utiliza en el dispatch
export default userSlice.reducer // Esto en el store