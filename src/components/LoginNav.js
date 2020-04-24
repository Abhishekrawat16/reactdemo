import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';


const LoginNav= () => {
    return (
                <ul className="nav nav-pills nav-justified">
                <li className="active"><NavLink to="/" activeClassName="selected">Login</NavLink></li>&nbsp;|&nbsp;
                <li><NavLink to="/register" activeClassName="selected">RegisterPage</NavLink></li>
                </ul>
    );
}

export default LoginNav;