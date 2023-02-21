import React, { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LoginRequest } from '../../APIRequest/APIRequest';
import { errorToast, isEmail, isEmpty } from '../../helper/FormHelper';

const Login = () => {

    let emailRef, passwordRef = useRef();
    const submitLogin = ()=>{
        let email = emailRef.value;
        let password = passwordRef.value;

        if (isEmail(email)){
            errorToast("Invalid Email Address");
        }
        else if (isEmpty(password)){
            errorToast("Password Required");
        }
        else{
            LoginRequest(email, password).then((result)=>{
                if (result===true){
                    window.location.href="/"
                }
            })
        }
    }


    return (
        <Fragment>   
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-7 col-lg-6 center-screen'>
                        <div className='card w-90 p-4'>
                            <div className='card-body'>
                                <h4>Sign In</h4>
                                <br/>
                                <input ref={(input)=>emailRef=input} placeholder='User Email' className='form-control animated fadeInUp' type="email"/>
                                <br/>
                                <input ref={(input)=>passwordRef=input} placeholder='Password' className='form-control animated fadeInUp' type="password"/>
                                <br/>
                                <button onClick={submitLogin} className='btn btn-primary w-100 animated fadeInUp float-end'>Sign In</button>
                                <div className='text-center w-100'>
                                    <Link className='text-center animated fadeInUp to=' to="/registration">Sign Up</Link>
                                    <br/>
                                    <Link className='text-center animated fadeInUp' to="/forgetPass">Forget Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;