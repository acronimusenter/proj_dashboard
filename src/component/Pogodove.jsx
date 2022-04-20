import React from 'react';
import '../App.css';
import '../index.css'
import {Meteochart} from "./Meteochart";
import Citiname from "./Citiname";
import Htempadd from './Htemp';
import Daneadd from './Dane';
import Buttonlogin from './Buttonlogin';

const site = { borderRadius: "100px"};

const left = { backgroundColor: "royalblue",
                   width: "40vh",
                   height: "1000vh",
                   float: "left",
                   borderTopLeftRadius: "50px",
                   borderBottomLeftRadius: "50px"};

const right = { backgroundColor: "darkgrey",
                    width: "79.8%",
                    height: "1000vh",
                    float: "left",
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px"};

const window = { width: "17vh",
                     height: "20%",
                     backgroundColor: "white",
                     margin: "5rem",
                     marginLeft: "8rem",
                     marginTop: "20px",
                     float: "left",
                     borderRadius: "25px"};

const smallbox = {height: "45vh",
                      backgroundColor: "white",
                      margin: "5vh",
                      borderRadius: "25px",
                       overflow:"scroll"};


const eye = { width: "7vh",
                  height: "14vh",
                  backgroundColor: "white",
                  margin: "2.5rem",
                  marginLeft: "8.5rem",
                  float: "left",
                  borderRadius: "25px"};

const name = {height: "30vh"};

const shadow ={borderRadius: "25px",
                   backgroundColor: "royalblue",
                   width: "153vh",
                   height: "45vh",
                   float: "left",
                   margin: "2rem"};

const chart = {backgroundColor: "white", margin: "2rem", height: "38vh",borderRadius: "25px" };

const scone = {color: "black",width: "155vh",height: "25vh"};
const sect = {backgroundColor: "blue"};
export function Pogodove(){
return (
  <div className="site" style={site}>
          <div className="left" style={left}>
               <h1 style={{backgroundColor: "white", borderRadius: "25px",margin: "2em",marginBottom: "0em", color: 'royalblue',padding: "1em", textAlign: "center",fontSize:"2em;"}}>Pogodove</h1>
              <div className="name" style={name}><Buttonlogin/></div>

              <div className="smallbox" style = {smallbox}><Daneadd/></div>
          </div>
          <div className="right" style={right}>
              <div className="scone" style={scone}>
              <Citiname/>


              </div>
              <Htempadd/>
              <div className="sectree">
                  <div className="shadow" style={shadow}><div className="chart" style={chart}><Meteochart/></div></div>
              </div>
          </div>
      </div>
)


}
