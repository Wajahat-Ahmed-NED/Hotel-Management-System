import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  
  } from "react-router-dom";
export default function Footer() {
    return (
        <>
         <div className="container-fluid py-2 mt-3" style={{backgroundColor:'black',color:'white'}}>
             <span >@Copyright-2021 | All Rights Reserved</span>
             <Link to='/dashboard'>
             <span style={{marginLeft:'130px'}}>Admin Panel</span>
             </Link>
             </div>   
        </>
    )
}
