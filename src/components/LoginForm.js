import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import TaskManagement from '../TaskManagement';
import Login from './Login';

class LoginForm extends React.Component {



    render() {
        console.log(this);
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Login}></Route>
                    <Route exact path="/home" component={TaskManagement}></Route>
                    <Route path="/register" component={RegisterPage}></Route>

                </Router>
            </div>
        );
    }
}
const RegisterPage=()=>
<h1>Register Page</h1>;



export default LoginForm;

