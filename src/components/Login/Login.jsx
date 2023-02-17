import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-7 col-lg-6 center-screen'>
                    <div className='card w-90 p-4'>
                        <div className='card-body'>
                            <h4>Sign In</h4>
                            <br/>
                            <input placeholder='User Email' className='form-control animated fadeInUp' type="email"/>
                            <br/>
                            <input placeholder='Password' className='form-control animated fadeInUp' type="password"/>
                            <br/>
                            <button className='btn btn-primary w-100 animated fadeInUp float-end'>Sign In</button>
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
    );
};

export default Login;