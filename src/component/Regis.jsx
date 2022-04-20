import React, {Component} from "react";
import { History, LocationState } from "history";
const axios = require('axios');

interface RegisProps {
 someOfYourOwnProps: any;
 history: History<LocationState>;
 someMorePropsIfNeedIt: any;
}

class Regis extends Component<RegisProps, {}> {

    state:any = {
           account: {
               username: "",
               email: "",
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
           if (account.email.trim() === '') {
               errors.password = 'Email is required!';
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

            console.log(this.state)

            axios({
                method: 'post',
                url: 'https://pr-movies.herokuapp.com/api/user/create',
                data: {
                    name: this.state.account.username,
                    email: this.state.account.email,
                    password: this.state.account.password
                }
            }).then((response:any) => {
                alert("Konto utworzone.");
                this.handleChangeRoute();
            }).catch((error:any) => {
                const errors:any = {};
                errors.password = 'Given username does\'t exists or password is wrong!';
                this.setState({errors: errors || {}});
                console.log(error);
            });
        };

        handleChange = (event:any) => {
               const account = {...this.state.account};
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
          <div className="mb-3 row">
           <label htmlFor="staticLogin" className="col-sm-2 col-form-label"><p className="text-danger">Login:</p></label>
            <div className="col-sm-10">
              <div className="w-75 p-3">
              <input value={this.state.account.username} onChange={this.handleChange} type='text' name='username' className="form-control" id="username" placeholder='Login'></input>
              </div>
            </div>
            </div>
            {this.state.errors.username &&
            <div className="alert alert-danger">{this.state.errors.username}</div>}
            <div className="mb-3 row">
            <label htmlFor="staticName" className="col-sm-2 col-form-label"><p className="text-danger">Email:</p></label>
            <div className="col-sm-10">
            <div className="w-75 p-3">
              <input value={this.state.account.email} name='email' onChange={this.handleChange} type="email" className="form-control" id="email" placeholder='Email'></input>
            </div>
            </div>
            </div>
            {this.state.errors.email &&
            <div className="alert alert-danger">{this.state.errors.email}</div>}
            <div className="row mb-3">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label"><p className="text-danger">Password:</p></label>
            <div className="col-sm-10">
            <div className="w-75 p-3">
            <input value={this.state.account.password} name='password' onChange={this.handleChange} type="password" className="form-control" id="password" placeholder='Haslo'></input>
            </div>
            </div>
            </div>
            {this.state.errors.password &&
            <div className="alert alert-danger">{this.state.errors.password}</div>}
            <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">Zarejestruj Się</button>
            </div>
          </div>
      </form>
      </div>

     );
  }
}
export default Regis;