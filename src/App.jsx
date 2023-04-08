import React, {Fragment} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import DashboardPage from "./pages/Dashboard-Page";
import CreatePage from "./pages/Create-Page";
import CanceledPage from "./pages/Canceled-Page";
import CompletedPage from "./pages/Completed-Page";
import ForgetpassPage from "./pages/Forgetpass-Page";
import LoginPage from "./pages/Login-Page";
import NewPage from "./pages/New-Page";
import ProfilePage from "./pages/Profile-Page";
import ProgressPage from "./pages/Progress-Page";
import RegistrationPage from "./pages/Registration-Page";
import Page404 from "./pages/Page-404";
import FullscreenLoader from './components/MasterLayout/Fullscreen-Loader';
import { getToken } from './helper/SessionHelper';
import SendOTPPage from './pages/AccountRecover/SendOTPPage';
import VerifyOTPPage from './pages/AccountRecover/VerifyOTPPage';
import CreatePasswordPage from './pages/AccountRecover/CreatePasswordPage';

const App = () => {

  let token = getToken();
    if (token){
      return(
        <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashboardPage/>}/>
            <Route exact path="/create" element={<CreatePage/>}/>
            <Route exact path="/canceled" element={<CanceledPage/>}/>
            <Route exact path="/completed" element={<CompletedPage/>}/>
            <Route exact path="/new" element={<NewPage/>}/>
            <Route exact path="/profile" element={<ProfilePage/>}/>
            <Route exact path="/progress" element={<ProgressPage/>}/>
            <Route exact path="*" element={<Page404/>}/>
          </Routes>
        </BrowserRouter>
        <FullscreenLoader/>
      </Fragment>
      )
      
    }
    else{
      return(
        <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Navigate to="/login" replace/>}/>
            <Route exact path="/registration" element={<RegistrationPage/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/forgetPass" element={<ForgetpassPage/>}/>

            <Route exact path="/sendOTP" element={<SendOTPPage/>}/>
            <Route exact path="/verifyOTP" element={<VerifyOTPPage/>}/>
            <Route exact path="/createPassword" element={<CreatePasswordPage/>}/>
            
            <Route exact path="*" element={<Page404/>}/>
          </Routes>
        </BrowserRouter>
        <FullscreenLoader/>
      </Fragment>
    )
      
    }
};

export default App;


