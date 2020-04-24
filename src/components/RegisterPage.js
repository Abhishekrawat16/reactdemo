import React from 'react';
import LoginNav from './LoginNav';
import InputComponent from './InputComponent'


const RegisterPage = (props) => {
    return (
        <div>
            <LoginNav />
            <h1>Register Page</h1>
            <div className="form-group">
            <label className="control-label col-sm-2" >User Id</label>
            <div className="col-sm-10">
            <input className="form-control" name="uId" id="username" type="text" onChange={props.update}></input><br />
                {/* <input type={props.type} id={props.id} className="form-control" onChange={props.handleChange}></input> */}
                <label className="error"></label>
            </div>
        </div>
        </div>
    );
}

export default RegisterPage;