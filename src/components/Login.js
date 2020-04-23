import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: [{ uId: '', pass: '' }],
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
        if (this.state.uId == '' && this.state.pass == '') {
            errors.push(
                { uId: 'User Id cannot be empty', pass: 'Password cannot be empty' }
            )
        }
        else if (this.state.uId == '' && this.state.pass != '') {
            errors.push(
                { uId: 'User Id cannot be empty', pass: '' }
            )
        }
        else if (this.state.uId != '' && this.state.pass == '') {
            errors.push(
                { uId: '', pass: 'Password cannot be empty' }
            )
        }
        else {
            errors.push({ uId: '', pass: '' });
            redirectToHome = true;
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
                <ul className="nav nav-pills nav-justified">
                <li className="active"><a href="/">Login</a></li>&nbsp;|&nbsp;
                <li><a href="/register">RegisterPage</a></li>
                </ul>
           
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
