import React from 'react';

const window = { width: "17vh",
                     height: "20%",
                     backgroundColor: "white",
                     marginRight: "5rem",
                     marginLeft: "8rem",
                     marginTop: "20px",
                     marginBottom: "1em",
                     float: "left",
                     borderRadius: "25px",
                     textAlign: "center"};

class Citiname extends React.Component <any, any> {

  render(){

  return (
            <div className="window" style={window}>
                  <h5>Miasto: {this.props.cityName}</h5>
            </div>

  )
  }
}
export default class Citinameblock extends React.Component <any, any> {
    constructor(props:any) {
                super(props);

                this.state = {
                    cities: [],
                    isLoaded: false,
                };

            }

        componentDidMount() {
                fetch(
                    "http://localhost:3001/api/pogodovo")
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            cities: json,
                        });
                    })
            }
    render(){
    const {cities} = this.state;

    return(
        <div className='row'>
            {cities.map((pogchamp:any) => (
            <div className='col-sm'>
            <div className='test' style={{marginTop:'1em'}}>
                <Citiname className='col p-2' cityName={pogchamp.cityName}/>
                </div>
            </div>
            ))}
            </div>
    )
    }
}