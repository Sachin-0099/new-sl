import './App.css'
import AdminDashboard from './components/AdminDashboard.jsx'
import Analytics from './components/Analytics.jsx';
import FormAdd from './components/FormAdd.jsx';
import Products from './components/Products.jsx';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/formAdd' element={<FormAdd/>}/>
    </Routes>
  );
}

export default App;