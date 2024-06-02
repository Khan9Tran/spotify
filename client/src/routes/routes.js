import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/home/home";
import {Login} from "../pages/login/login";
import {Register} from "../pages/register/register";
import { ForgotPassword } from "../pages/password/forgotPassword";

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password-reset" element={<ForgotPassword/>} />
        </Routes>
    )
}

export default AppRoutes;