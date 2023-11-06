import logo from './logo.svg';
import './App.css';
import { EngineMasters } from './components/enginemasters/enginemasters';
import { Productos } from './components/productos/productos';
import LoginUser from './components/login/LoginUser';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <EngineMasters />
      <Routes>
        <Route path='/' element={<Productos/>} />
        <Route path='/login' element={<LoginUser/>}/>         
        </Routes> 
        
    </div>
  );
}

export default App;
