import React from 'react';

const sect = {backgroundColor: "blue"};

const eye = { width: "7vh",
                  height: "14vh",
                  backgroundColor: "white",
                  margin: "2.5rem",
                  marginLeft: "8.5rem",
                  float: "left",
                  borderRadius: "25px",
                  paddingTop: "0.5rem" ,
                  fontSize: "3em"};

class Htemp extends React.Component <any, any> {

  render(){

  return (
                          <div className="sect" style={sect}>
                              <div className="eye" style={eye}>°C<br/>{this.props.tempH1} </div>

                          </div>

  )
  }
}
export default class Htempadd extends React.Component <any, any> {
    constructor(props:any) {
                super(props);

                this.state = {
                    temps: [],
                    isLoaded: false,
                };

            }

        componentDidMount() {
                fetch(
                    "http://localhost:3001/api/pogodovo")
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            temps: json,
                        });
                    })
            }
    render(){
    const {temps} = this.state;

    return(
        <div className='row'>
            {temps.map((pogchamp:any) => (
            <div className='col-sm'>
            <div className='test' style={{marginTop:'1em'}}>
                <Htemp className='col p-2' tempH1={pogchamp.tempH1}/>
                <Htemp className='col p-2' tempH1={pogchamp.tempH2}/>
                <Htemp className='col p-2' tempH1={pogchamp.tempH3}/>
                <Htemp className='col p-2' tempH1={pogchamp.tempH4}/>
                <Htemp className='col p-2' tempH1={pogchamp.tempH5}/>
                <Htemp className='col p-2' tempH1={pogchamp.tempH6}/>
                </div>
            </div>
            ))}
            </div>
    )
    }
}