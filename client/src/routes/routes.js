import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/home/home";
import {Login} from "../pages/login/login";
import {Register} from "../pages/register/register";

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AppRoutes;