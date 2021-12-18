import React from 'react'
import './Cards.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  
  } from "react-router-dom";
import FloatingActionButtons from './MuiButton';
export default function Cards(props) {
    return (
        <>
            <div className="card shadow-lg mb-3 bg-white rounded " style={{ boxShadow: "5px 10px #888888", }}  style={{width:" 18rem"}}>
                <img src={props.url} className="card-img-top" alt="Not Found" />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.paragraph}...</p>
                    <p>Location : {props.location} </p>
                    <span>No.of Rooms : {props.room}</span> | 
                    <span>&nbsp;Rs.{props.price}/Day</span>
                    <hr/>
                    <Link to='/booking'><FloatingActionButtons value="Book Now"/></Link>
                    {/* <Link className="btn btn-primary" to="/booking">Book</Link> */}
                    {/* <a href="/" className="btn btn-primary">Book Now</a> */}
                </div>
            </div>
        </>
    )
}
