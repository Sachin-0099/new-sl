import Home from './pages/Home.jsx'
import { Routes,Route } from "react-router-dom"
import Signup from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProductInfo from './pages/ProductInfo.jsx'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/product/:orderId' element={<ProductInfo/>}/>
    </Routes>
    </>
  )
}

export default App
