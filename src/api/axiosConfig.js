import axios from 'axios'

const instance = axios.create({
    baseURL:"https://workflowproyectomes2.herokuapp.com"
})

const get= async (url)=>{
    return await instance.get(url,{
        withCredentials:true
    })
}
const post= async (url,data)=>{
    return await instance.post(url,data,{
        withCredentials:true
    })
}

export default instance
export { get,post }