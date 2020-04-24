import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import LoginNav from './LoginNav';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: [{ uId: '', pass: '' }],
            users:[{uId:'abhi' ,pass:'abhi'}],
            uId: '',
            pass: '',
            redirectToHome: false
        }
        this.login = this.login.bind(this);
        this.update = this.update.bind(this);
    }

    validate() {
        let errors = [];
        let redirectToHome = false;
        let currentId=this.state.uId;
        let currentPass=this.state.pass;
        let validUser=false;
        if (currentId == '' && currentPass == '') {
            errors.push(
                { uId: 'User Id cannot be empty', pass: 'Password cannot be empty' }
            )
        }
        else if (currentId == '' && currentPass != '') {
            errors.push(
                { uId: 'User Id cannot be empty', pass: '' }
            )
        }
        else if (currentId != '' && currentPass == '') {
            errors.push(
                { uId: '', pass: 'Password cannot be empty' }
            )
        }
        else {
            this.state.users.forEach(user=>{
                if(user.uId===currentId){
                    validUser=true;
                    if(user.pass===currentPass){
                        errors.push(
                            { uId: '', pass: '' }
                        )
                        redirectToHome = true;
                    }
                    else{
                        errors.push(
                            { uId: '', pass: 'Password is Incorrect' }
                        )
                    }
                }
            });
            if(!validUser){
                errors.push(
                    { uId: 'User Does Not Exists', pass: '' }
                )
            }   
        }
        this.setState({
            errors,
            redirectToHome
        })
    }

    login(e) {
        e.preventDefault();
        this.validate();
        if (this.state.redirectToHome === true) {
            this.props.history.push('/home');
        }
    }

    update(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <LoginNav />
           
                <form className="form-horizontal" onSubmit={this.login}>
                    <div className="form-group">
                        <label className="control-label col-sm-2" >User Id:</label>
                        <div className="col-sm-10">
                            <input className="form-control" name="uId" id="username" type="text" onChange={this.update}></input><br />
                            <label className="error">{this.state.errors[0].uId}</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" >Password: </label>
                        <div className="col-sm-10">
                            <input className="form-control" name="pass" id="userpass" type="password" onChange={this.update}></input><br />
                            <label className="error">{this.state.errors[0].pass}</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button  type="submit">Login</button>
                        </div></div>
                </form>
            </div>
        );
    }
}




export default Login;
