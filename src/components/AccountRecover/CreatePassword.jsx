import React, { Fragment, useRef } from 'react';
import { useNavigate } from 'react-router';
import { errorToast, isEmpty } from '../../helper/FormHelper';
import { RecoverResetPassRequest } from '../../APIRequest/APIRequest';
import { getEmail, getOTP } from '../../helper/SessionHelper';

const CreatePassword = () => {

    let PasswordRef,ConfirmPasswordRef = useRef();
    let navigate=useNavigate();

    const ResetPass = () => {
        let Password = PasswordRef.value;
        let ConfirmPassword =  ConfirmPasswordRef.value;
        if(isEmpty(Password)){
            errorToast("Password Required")
        }
        else if(isEmpty(ConfirmPassword)){
            errorToast("Confirm Password Required")
        }
        else if(Password!==ConfirmPassword){
            errorToast("Password & Confirm Password Should be Same")
        }
        else{
            RecoverResetPassRequest(getEmail(),getOTP(),Password).then((result)=>{
                if(result===true){
                    navigate("/Login")
                }
            })
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90 p-4">
                            <div className="card-body">
                                <h4>SET NEW PASSWORD</h4>
                                <br/>
                                <label>Your email address</label>
                                <input readOnly={true} value={getEmail()} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <label>New Password</label>
                                <input  ref={(input)=>PasswordRef=input} placeholder="New Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <label>Confirm Password</label>
                                <input  ref={(input)=>ConfirmPasswordRef=input} placeholder="Confirm Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={ResetPass} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CreatePassword;