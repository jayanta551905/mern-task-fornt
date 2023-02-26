import axios from "axios";
import {errorToast, successToast} from "../helper/FormHelper";
import store from "../redux/store/store";
import {hideLoader, showLoader} from "../redux/state/settings-slice";
import {getToken, setEmail, setOTP, setToken, setUserDetails} from "../helper/SessionHelper";
import {setSummary} from "../redux/state/summary-slice";
import {SetProfile} from "../redux/state/profile-slice";
import { setCanceledTask, setCompletedTask, setNewTask, setProgressTask } from "../redux/state/task-slice";


const baseURL="http://localhost:5000/api/v1"

const AxiosHeader={headers:{"token":getToken()}}

export function NewTaskRequest(title,description){


    store.dispatch(showLoader())

    let URL=baseURL+"/createTask";
    let postBody={"title":title,"description":description}

    return axios.post(URL,postBody,AxiosHeader).then((res)=>{
        store.dispatch(hideLoader())
        if(res.status===200){
            successToast("New Task Created")
            return true;
        }
        else{
            errorToast("Something Went Wrong")
            return false;
        }

    }).catch((err)=>{
        errorToast("Something Went Wrong")
        store.dispatch(hideLoader())
        return false;
    })
}

export function LoginRequest(email,password){
    store.dispatch(showLoader())
    let URL=baseURL+"/login";
    let postBody={"email":email,"password":password}
    return axios.post(URL,postBody).then((res)=>{
        store.dispatch(hideLoader())
        if(res.status===200){
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            successToast("Login Success")
            return true;
        }
        else{
            errorToast("Invalid Email or Password")
            return  false;
        }
    }).catch((err)=>{
        errorToast("Something Went Wrong")
        store.dispatch(hideLoader())
        return false;
    });
}

export function RegistrationRequest(email,firstName,lastName,mobile,password,photo){
    store.dispatch(showLoader())
    let URL=baseURL+"/registration";
    let postBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password, photo:photo}
    return axios.post(URL,postBody).then((res)=>{
        store.dispatch(hideLoader())
        if(res.status===200){
            if(res.data['status']==="Fail"){
                if(res.data['data']['keyPattern']['email']===1){
                    errorToast("Email Already Exist")
                    return false;
                }
                else{
                    errorToast("Something Went Wrong")
                    return false;
                }
            }
            else {
                successToast("Registration Success")
                return true;
            }
        }
        else{
            errorToast("Something Went Wrong")
            return  false;
        }
    }).catch((err)=>{
        store.dispatch(hideLoader())
        errorToast("Something Went Wrong")
        return false;
    })
}

export function TaskListByStatus(Status){
    store.dispatch(showLoader())
    let URL=baseURL+"/listTaskByStatus/"+Status;
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(hideLoader())
        if(res.status===200){
            if(Status==="New"){
                store.dispatch(setNewTask(res.data['data']))
            }
            else if(Status==="Completed"){
                store.dispatch(setCompletedTask(res.data['data']))
            }
            else if(Status==="Canceled"){
                store.dispatch(setCanceledTask(res.data['data']))
            }
            else if(Status==="Progress"){
                store.dispatch(setProgressTask(res.data['data']))
            }
        }
        else{
            errorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        errorToast("Something Went Wrong")
        store.dispatch(hideLoader())
    });
}

export function SummaryRequest(){
    store.dispatch(showLoader())
    let URL = baseURL+"/taskStatusCount";
    axios.get(URL, AxiosHeader).then((res)=>{
        store.dispatch(hideLoader())
        if (res.status===200){
            store.dispatch(setSummary(res.data['data']))
        }
        else{
            errorToast("Something went wrong")
        }
    }).catch((err)=>{
        errorToast("Something went wrong")
        store.dispatch(hideLoader())
    })
}

export function DeleteRequest(id){
    store.dispatch(showLoader())
    let URL=baseURL+"/deleteTask/"+id;
    return axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(hideLoader())
        if(res.status===200){
            successToast("Delete Successful")
            return true;
        }
        else{
            errorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        errorToast("Something Went Wrong======>")
        store.dispatch(hideLoader())
        return false;
    });
}


// export function UpdateStatusRequest(id,status){
//     store.dispatch(ShowLoader())
//     let URL=BaseURL+"/updateTaskStatus/"+id+"/"+status;
//     return axios.get(URL,AxiosHeader).then((res)=>{
//         store.dispatch(HideLoader())
//         if(res.status===200){
//             SuccessToast("Status Updated")
//             return true;
//         }
//         else{
//             ErrorToast("Something Went Wrong")
//             return false;
//         }
//     }).catch((err)=>{
//         ErrorToast("Something Went Wrong")
//         store.dispatch(HideLoader())
//         return false;
//     });
// }
// export function GetProfileDetails(){
//     store.dispatch(ShowLoader())
//     let URL=BaseURL+"/profileDetails";
//     axios.get(URL,AxiosHeader).then((res)=>{
//         store.dispatch(HideLoader())
//         if(res.status===200){
//             store.dispatch(SetProfile(res.data['data'][0]))
//         }
//         else{
//             ErrorToast("Something Went Wrong")
//         }
//     }).catch((err)=>{
//         ErrorToast("Something Went Wrong")
//         store.dispatch(HideLoader())
//     });
// }
// export function ProfileUpdateRequest(email,firstName,lastName,mobile,password,photo){
//
//     store.dispatch(ShowLoader())
//
//     let URL=BaseURL+"/profileUpdate";
//
//     let PostBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}
//     let UserDetails={email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo}
//
//     return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
//         store.dispatch(HideLoader())
//         if(res.status===200){
//
//             SuccessToast("Profile Update Success")
//             setUserDetails(UserDetails)
//
//             return true;
//         }
//         else{
//             ErrorToast("Something Went Wrong")
//             return  false;
//         }
//     }).catch((err)=>{
//         ErrorToast("Something Went Wrong")
//         store.dispatch(HideLoader())
//         return false;
//     });
// }
//
// // Recover Password Step 01 Send OTP
// export function RecoverVerifyEmailRequest(email){
//     store.dispatch(ShowLoader())
//     let URL=BaseURL+"/RecoverVerifyEmail/"+email;
//     return axios.get(URL).then((res)=>{
//         store.dispatch(HideLoader())
//         if(res.status===200){
//
//             if(res.data['status']==="fail"){
//                 ErrorToast("No user found");
//                 return false;
//             }
//             else{
//                 setEmail(email)
//                 SuccessToast("A 6 Digit verification code has been sent to your email address. ");
//                 return true;
//             }
//         }
//         else{
//             ErrorToast("Something Went Wrong");
//             return false;
//         }
//     }).catch((err)=>{
//         ErrorToast("Something Went Wrong")
//         store.dispatch(HideLoader())
//         return false;
//     });
// }
//
// // Recover Password Step 02 Verify OTP
// export function RecoverVerifyOTPRequest(email,OTP){
//     store.dispatch(ShowLoader())
//     let URL=BaseURL+"/RecoverVerifyOTP/"+email+"/"+OTP;
//     return axios.get(URL).then((res)=>{
//         store.dispatch(HideLoader())
//         if(res.status===200){
//             if(res.data['status']==="fail"){
//                 ErrorToast(res.data['data']);
//                 return false;
//             }
//             else{
//                 setOTP(OTP)
//                 SuccessToast("Code Verification Success");
//                 return true;
//             }
//         }
//         else{
//             ErrorToast("Something Went Wrong")
//             return false;
//         }
//     }).catch((err)=>{
//         ErrorToast("Something Went Wrong")
//         store.dispatch(HideLoader())
//         return false;
//     });
// }
//
// // Recover Password Step 03 Reset Pass
// export function RecoverResetPassRequest(email,OTP,password){
//     store.dispatch(ShowLoader())
//     let URL=BaseURL+"/RecoverResetPass";
//     let PostBody={email:email,OTP:OTP,password:password}
//
//     return axios.post(URL,PostBody).then((res)=>{
//         store.dispatch(HideLoader())
//         if(res.status===200){
//
//             if(res.data['status']==="fail"){
//                 ErrorToast(res.data['data']);
//                 return false;
//             }
//             else{
//                 setOTP(OTP)
//                 SuccessToast("NEW PASSWORD CREATED");
//                 return true;
//             }
//         }
//         else{
//             ErrorToast("Something Went Wrong")
//             return false;
//         }
//     }).catch((err)=>{
//         ErrorToast("Something Went Wrong")
//         store.dispatch(HideLoader())
//         return false;
//     });
// }
