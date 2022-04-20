import logo from './logo.svg';
import './App.css';
import './index.css'
import {Pogodove} from './component/Pogodove'
import Regis from './component/Regis'
import Logan from './component/Logan'
import  {Adminsite} from './component/Adminsite'
import { isExpired, decodeToken  } from "react-jwt";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";



function App() {

const isNotLogged:any = isExpired(localStorage.getItem('token') || '{}');
const user:any = decodeToken(localStorage.getItem('token') || '{}');

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Pogodove/>}/>
            <Route path="/register" element = {<Regis/>}/>
            <Route path="/login" element = {<Logan/>}/>
            <Route path="/adminsite" element={ !isNotLogged ? <Adminsite/> : <Pogodove/>}/>
        </Routes>
    </BrowserRouter>
  );}

export default App;
