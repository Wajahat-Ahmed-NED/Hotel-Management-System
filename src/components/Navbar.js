import { signOut } from 'firebase/auth';
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  
  } from "react-router-dom";
import { auth } from '../config/firebase';
import FloatingActionButtons from './MuiButton';
import './Navbar.css';

export default function Navbar(props) {
    const navigate=useNavigate()
    const logout = () => {
        signOut(auth)
          .then(() => {
            console.log("Sign out");
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      };
    // const handleSignUp=()=>{
    //     <Link to='/Signup'/>
    // }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" >Hotel Management System</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " to="/">Home</Link>
                                {/* <a  aria-current="page" href="/">Home</a> */}
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link " to="/contact">Contact</Link>

                                {/* <a className="nav-link" href="/">Contact</a> */}
                            </li>
                            <li className="nav-item ">
                            <Link className="nav-link " to="/aboutus">About Us</Link>
                                {/* <a className="nav-link" href="/" >
                                    About Us
                                </a> */}
                                
                            </li>
                            <li className="nav-item ">
                            <Link className="nav-link " to="/dashboard">Admin Panel</Link>
                                {/* <a className="nav-link" href="/" >
                                    About Us
                                </a> */}
                                
                            </li>

                        </ul>
                        {/* <Link to='/Signup' className='mx-2'><FloatingActionButtons /></Link>
                        <Link to='/Login' className='mx-2'><FloatingActionButtons/></Link> */}
                        {
                            props.login ? <>
                            <Link to="/" className="btn btn-info mx-2">My Profile</Link>
                            <Link to="/Login" className="btn btn-outline-danger mx-2" onClick={logout}>Sign Out</Link>
                            </>
                            :
                            <>
                            <Link to="/Signup" className="btn btn-info mx-2">Sign up</Link>
                            <Link to="/Login" className="btn btn-outline-info mx-2">Login</Link>
                            <Link to="/Login" className="btn btn-outline-danger mx-2" onClick={logout}>Sign Out</Link>
                            
                            
                            </>


                        }
                        

                    </div>
                </div>
            </nav>
        </>
    )
}
