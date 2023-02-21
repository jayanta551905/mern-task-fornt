import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import {errorToast, isEmail, isEmpty, isMobile} from "../../helper/FormHelper";
import {RegistrationRequest} from "../../APIRequest/APIRequest";
import {useNavigate} from "react-router";

const Registration = () => {

    let emailRef, firstNameRef, lastNameRef, mobileRef, passwordRef = useRef();
    let navigate = useNavigate();
    const onRegistration = () => {
        let email = emailRef.value;
        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let mobile = mobileRef.value;
        let password = passwordRef.value;

        if (isEmail(email)){
            errorToast("Valid Email Required !");
        }
        else if (isEmpty(firstName)){
            errorToast("First Name Required !");
        }
        else if (isEmpty(lastName)){
            errorToast("Last Name Required !");
        }
        else if (!isMobile(mobile)){
            errorToast("Invalid Mobile Number !");
        }
        else if (isEmpty(password)){
            errorToast("Password Required !");
        }
        else {
            RegistrationRequest(email, firstName, lastName, mobile, password, "").then((result)=>{
                if (result===true){
                    navigate("/login");
                }
            })
        }
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-7 col-lg-6 center-screen'>
                    <div className='card w-90 p-4'>
                        <div className='card-body'>
                            <h4>Sign In</h4>
                            <br/>
                            <label className='animated fadeInUp'>Email</label>
                            <input ref={(input)=>emailRef=input} placeholder='User Email' className='form-control animated fadeInUp' type="email"/>
                            <br/>
                            <label className='animated fadeInUp'>First Name</label>
                            <input ref={(input)=>firstNameRef=input} placeholder='First Name' className='form-control animated fadeInUp' type="text"/>
                            <br/>
                            <label className='animated fadeInUp'>Last Name</label>
                            <input ref={(input)=>lastNameRef=input} placeholder='Last Name' className='form-control animated fadeInUp' type="text"/>
                            <br/>
                            <label className='animated fadeInUp'>Mobile No</label>
                            <input ref={(input)=>mobileRef=input} placeholder='Mobile' className='form-control animated fadeInUp' type="mobile"/>
                            <br/>
                            <label className='animated fadeInUp'>Password</label>
                            <input ref={(input)=>passwordRef=input} placeholder='Password' className='form-control animated fadeInUp' type="password"/>
                            <br/>
                            <button onClick={onRegistration} className='btn btn-primary w-100 animated fadeInUp float-end'>Sign Up</button>
                            <div className='text-center w-100'>
                                <Link className='text-center animated fadeInUp to=' to="/login">Sign in</Link>
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

export default Registration;