import Home from './pages/Home.jsx'
import { Routes,Route } from "react-router-dom"
import Signup from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
