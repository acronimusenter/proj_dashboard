import React, {Component} from "react";
import { History, LocationState } from "history";
const axios = require('axios');

interface LoganProps {
 someOfYourOwnProps: any;
 history: History<LocationState>;
 someMorePropsIfNeedIt: any;
}

class Logan extends Component<LoganProps, {}> {

     state:any = {
            account: {
                username: "",
                password: ""
            },
            errors: {}
        };

        handleChangeRoute = () => {
            this.props.history.push('/');
            window.location.reload();
        };

        validate = () => {
            const errors:any = {};

            const {account} = this.state;
            if (account.username.trim() === '') {
                errors.username = 'Username is required!';
            }
            if (account.password.trim() === '') {
                errors.password = 'Password is required!';
            }

            return Object.keys(errors).length === 0 ? null : errors;
        };

        handleSubmit = (event:any) => {
            event.preventDefault();

            const errors = this.validate();
            this.setState({errors: errors || {}});
            if (errors) return;

            axios({
                method: 'post',
                url: 'https://pr-movies.herokuapp.com/api/user/auth',
                data: {
                    login: this.state.account.username,
                    password: this.state.account.password
                }
            }).then((response:any) => {
                localStorage.setItem('token', response.data.token);
                this.handleChangeRoute();
            }).catch((error:any) => {
                const errors:any = {};
                errors.password = 'Given username does\'t exists or password is wrong!';
                this.setState({errors: errors || {}});
                console.log(error);
            });
        };

        handleChange = (event:any) => {
            const account:any = {...this.state.account};
            account[event.currentTarget.name] = event.currentTarget.value;
            this.setState({account});
        };

        render(){
            return (
            <div className="container">
                <div className="App">

                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row mb-3">
                     <label htmlFor="staticLogin" className="col-sm-2 col-form-label"><p className="text-danger">Login:</p></label>
                      <div className="col-sm-8">
                        <div className="w-100 p-2">
                        <input value={this.state.account.username} type="text" name='username' onChange={this.handleChange} className="form-control" id="username" placeholder='Login'></input>
                        </div>
                      </div>
                    </div>
                    {this.state.errors.username &&
                    <div className="alert alert-danger">{this.state.errors.username}</div>}
                    <div className="row mb-3">
                       <label htmlFor="inputPassword" className="col-sm-2 col-form-label"><p className="text-danger">Password:</p></label>
                          <div className="col-sm-8">
                          <div className="w-100 p-2">
                            <input value={this.state.account.password} type="password" name='password' onChange={this.handleChange} className="form-control" id="password" placeholder='Haslo'></input>
                          </div>
                      </div>
                    </div>
                    {this.state.errors.password &&
                    <div className="alert alert-danger">{this.state.errors.password}</div>}
                   <div className="col-12 text-center">
                       <button type="submit" className="btn btn-primary">Zaloguj Się</button>
                    </div>
                  </form>
                </div>
            );
        }
    }

export default Logan;