import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute=({children})=>{
return !!localStorage.getItem('Token')? children : <Navigate to='/' />
}
export  default PrivateRoute;
