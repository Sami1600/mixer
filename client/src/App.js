import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './layout/Header';
import TestAuth from './pages/TestAuth';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/auth' element={<TestAuth/>}></Route>
      </Routes>
    </>
  );
}

export default App;
