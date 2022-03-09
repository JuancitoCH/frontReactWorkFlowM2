import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import Loader from "./components/Loader"
import Home from "./pages/Home"
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Loader/>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/login" element={<Login/>} />
      <Login/> */}

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



  
