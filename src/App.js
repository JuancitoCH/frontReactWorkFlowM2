import { useEffect } from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import AlertError from './components/AlertError';
import Header from "./components/Header";
import Loader from "./components/Loader"
import Login from "./components/Login"
import Register from './components/Register';
import Home from "./pages/Home"
import Teams from './pages/Teams';
import {useDispatch} from 'react-redux'
import {validateLog} from './features/user/userSlice'
import ListAndTask from './pages/ListsAndTask'
function App() {
  const Dispatch=useDispatch()
  useEffect(()=>{
    Dispatch(validateLog())
  },[])
  return (
    <div className='md:ml-24 relative flex justify-center'>
    <BrowserRouter>
    <div className='bg-Cwaikawa-gray-900 -z-50 h-screen w-screen fixed'></div>
    <AlertError/>
    <Header/>
    <Login/>
    <Register/>
    <Loader/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/teams" element={<Teams/>}/>
      <Route path="/teams/list/:idTeam" element={<ListAndTask/>}/>
      {/* <Route path="/login" element={<Login/>} /> */}
      {/* <Route path="/login" element={<Login/>} />
      <Login/> */}

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



  
