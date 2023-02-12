import React, {Fragment} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
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

const App = () => {
    return (
        <Fragment>
          <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<DashboardPage/>}/>
                <Route exact path="/create" element={<CreatePage/>}/>
                <Route exact path="/create" element={<CanceledPage/>}/>
                <Route exact path="/create" element={<CompletedPage/>}/>
                <Route exact path="/create" element={<ForgetpassPage/>}/>
                <Route exact path="/create" element={<LoginPage/>}/>
                <Route exact path="/create" element={<NewPage/>}/>
                <Route exact path="/create" element={<ProfilePage/>}/>
                <Route exact path="/create" element={<ProgressPage/>}/>
                <Route exact path="/create" element={<RegistrationPage/>}/>
                <Route exact path="/create" element={<Page404/>}/>
            </Routes>
          </BrowserRouter>
        </Fragment>
    );
};

export default App;