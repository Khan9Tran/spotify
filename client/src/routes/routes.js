import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/home/home";
import {Login} from "../pages/login/login";
import {Register} from "../pages/register/register";
import { ForgotPassword } from "../pages/password/forgotPassword";
import { ResetPassword } from "../pages/password/resetPassword";

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password-reset" element={<ForgotPassword/>} />
            <Route path="/new-password/:token" element={<ResetPassword />} />
        </Routes>
    )
}

export default AppRoutes;