import React from "react";
import { Navigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
export default function GuestGuard({children}){
    const {user} = useAuth()
        if(!user){
            return children
        }


       return  <Navigate to="/Children"/>
}