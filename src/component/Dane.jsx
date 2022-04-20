import React from 'react';

const temp = {fontSize: "1em",
paddingTop: "0.5em",

};

class Dane extends React.Component <any, any> {

  render(){

  return (
                          <div style={{marginTop: "1em"}} >

                                <p style={temp}>{this.props.tempH1}</p>

                          </div>

  )
  }
}
export default class Daneadd extends React.Component <any, any> {
    constructor(props:any) {
                super(props);

                this.state = {
                    danes: [],
                    isLoaded: false,
                };

            }

        componentDidMount() {
                fetch(
                    "http://localhost:3001/api/pogodovo")
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            danes: json,
                        });
                    })
            }
    render(){
    const {danes} = this.state;

    return(
        <div className='row'>
            {danes.map((pogchamp:any) => (
            <div className='col-sm'>
            <div className='test' style={{marginTop:'1em'}}>
             <Dane className='col p-2' tempH1={"Miasto: "+pogchamp.cityName}/>
                <Dane className='col p-2' tempH1={"Wilgotność: "+pogchamp.hum+" %"}/>
                <Dane className='col p-2' tempH1={"Temperatura: "+pogchamp.tem+" °C"}/>
                <Dane className='col p-2' tempH1={"Ciśnienie: "+pogchamp.pres+" hPa"}/>
                <Dane className='col p-2' tempH1={"Opady deszczu: "+pogchamp.rain+" mm"}/>
                <Dane className='col p-2' tempH1={"Data: "+pogchamp.date}/>
                <Dane className='col p-2' tempH1={"Kier. wiatru: "+pogchamp.dirwind}/>
                <Dane className='col p-2' tempH1={"Wschód: "+pogchamp.sun}/>
                <Dane className='col p-2' tempH1={"Zachód: "+pogchamp.sun1}/>
                <Dane className='col p-2' tempH1={"Jakość powietrza: "+pogchamp.airpoll}/>
                </div>
            </div>
            ))}
            </div>
    )
    }
}