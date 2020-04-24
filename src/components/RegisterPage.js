import React from 'react';
import LoginNav from './LoginNav';
import inputComponent from './inputComponent'


const RegisterPage = () => {
    return (
        <div>
            <LoginNav />
            <h1>Register Page</h1>
            <inputComponent lable="User Id:"/>
        </div>
    );
}

export default RegisterPage;