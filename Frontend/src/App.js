import logo from './logo.svg';
import './App.css';
import { EngineMasters } from './components/enginemasters/enginemasters';
import { Productos } from './components/productos/productos';
import LoginUser from './components/login/LoginUser';
import RegisterUser from './components/register/RegisterUser';
import Suscribirse from './components/suscribirse/suscribirse';
import Privacidad from './components/politicas/Privacidad';
import Datos from './components/politicas/Datos';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <EngineMasters />
      <Routes>
        <Route path='/' element={<Productos/>} />
        <Route path='/login' element={<LoginUser/>}/> 
        <Route path='/register' element={<RegisterUser/>}/> 
        <Route path='/suscribirse' element={<Suscribirse/>}/>     
        <Route path='/politicas-privacidad' element={<Privacidad/>}/>     
        <Route path='/politicas-datos' element={<Datos/>}/>     
        </Routes> 
        
    </div>
  );
}

export default App;
