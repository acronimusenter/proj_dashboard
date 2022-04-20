import React from 'react'
import { Link } from 'react-router-dom';
import { isExpired, decodeToken  } from "react-jwt";

const buton = {borderRadius: "25px",fontSize: "1.5em",textAlign: "center", paddingLeft: "2em",paddingRight: "2em",paddingTop: "1em",paddingBottom: "1em",marginBottom: "1em",textShadow: "4px black"}

const Login = () => {

    const user:any = decodeToken(localStorage.getItem('token') || '{}');
    const isNotLogged:any = isExpired(localStorage.getItem('token') || '{}');

    return (
      <div className="container">
      <div className="App" style={{paddingTop: "2em"}}>
       <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand"></a>
              <div className='zalogowany'>
                     {user && <h4 style={{textAlign: "center",borderRadius: "20px",backgroundColor: "white", margin:"2em"}}>Jestes zalogowany jako:<br/> {user.name}</h4>}
                     </div>
              <form className="d-flex">
              </form>
              {isNotLogged &&
              <Link to="/login"><button style={buton} className="btn btn-outline-success btn-dark my-3 my-sm-0 me-5" >Zaloguj</button></Link>}
              {isNotLogged &&
              <Link to="/register"><button style={buton} className="btn btn-outline-success btn-dark my-3 my-sm-0 me-5" >Zarejestruj</button></Link>}
              {!isNotLogged &&
              <Link to="/"><button style={buton}  className="btn btn-danger my-3 my-sm-0 me-5"
              onClick={() => localStorage.removeItem('token')}>Wyloguj</button></Link>}
              {!isNotLogged &&
               <Link to="/adminsite"><button style={buton}  className="btn btn-danger my-3 my-sm-0 me-5"
               >Panel Danych</button></Link>}
       </nav>

       </div>
       </div>
    );
}
export default Login;