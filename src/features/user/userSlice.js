import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get, post } from '../../api/axiosConfig'

export const login = createAsyncThunk("user/login", async (credentials, thunkAPI) => {
    const { data } = await post('/authenticate/login', {
        email: credentials.email,
        password: credentials.password
    })
    // console.log(data)
    if (data.success === false) {
        return thunkAPI.rejectWithValue(data)
    }
    //action.payload del reducer (fullfilled)
    return data
})
export const register = createAsyncThunk("user/register", async (credentials, thunkAPI) => {
    const { data } = await post('/authenticate/register', {
        userName: credentials.userName,
        userPhoto: credentials.userPhoto,
        email: credentials.email,
        password: credentials.password
    })
    console.log(data)
    if (data.success === false) {
        return thunkAPI.rejectWithValue(data)
    }
    return data
})

export const validate = createAsyncThunk("user/validate", async (params, thunkAPI) => {

    const data = await post('/authenticate/logged')
    console.log(data)
    if (!data.logged) {
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
    name: "user",
    initialState: {
        logged: false,
        name: "",
        email: "",
        loading: false,
        error: false,
        message: ""
    },
    reducers: {
        logout(state, action) {
            state.logged = false
            state.name = ""
            state.email = ""

        },
        loadingChange(state, action) {
            state.loading = !state.loading
        },
        loginState(state, action) {
            state.logged = true
        }
    },
    // Thunks
    extraReducers(builder) {
        builder.addCase(login.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.logged = true
            state.error = false
            state.name = action.payload.user.userName
            state.email = action.payload.user.email
            console.log(action.payload)
        })

        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.message = action.payload.message
            state.logged = false
            state.name = ""
            state.email = ""
        })


        builder.addCase(validate.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(validate.fulfilled, (state, action) => {
            state.logged = true
            state.name = action.payload?.user?.firstName
            state.error = false
        })

        builder.addCase(validate.rejected, (state, action) => {
            console.log(action.payload)
            state.error = true
            state.logged = false
            state.message = "Error"
        })


        builder.addCase(register.fulfilled, (state, action) => {
            console.log(action.payload)
            // state.error = true
            // state.logged = false
            // state.message = "Error"
        })
    }
})

export const { logout, loadingChange, loginState } = userSlice.actions // Esto se utiliza en el dispatch
export default userSlice.reducer // Esto en el store