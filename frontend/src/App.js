
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Create from './components/Create/Create';

function App() {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path="/home" element = {<Home/>} />
      <Route path="/create" element = {<Create/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
