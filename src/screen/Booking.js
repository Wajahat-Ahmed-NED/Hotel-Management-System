import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import FloatingActionButtons from '../components/MuiButton';
import Modal from '../components/Modal';

export default function Booking() {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        //    return  <Link to="/payment"/>
        // setModal(true)


        navigate("/payment")
    }
    const handlebtn=()=>{
        setModal(true)
    }
    const [loader, setLoader] = useState(false)
    // useEffect(() => {
    //     setLoader(true)
    //     onAuthStateChanged(auth, (user) => {
    //       if (user) {
    //         const uid = user.uid
    //         console.log(uid)
    //         // setuserLogin(true);
    //         setLoader(false)
    //         // setuserData(location.state)
    //         // getData()
    //       }
    //       else {
    //         navigate("/login")
    //       }
    //     })

    //   }, [])
    return (
        <>
            <Navbar />
            
            <h1 className='my-3'>Booking Details</h1>
            {
                loader ? <h1>Loading...</h1> :

                    <div className="container">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">FullName</label>
                                <input required type="text" className="form-control" />
                                <div className="form-text">We'll never share your name with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">CNIC No.</label>
                                <input required type="number" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone No.</label>
                                <input required type="number" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">No of People</label>
                                <input required type="number" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">No of Days</label>
                                <input required type="number" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">No of Rooms</label>
                                <input required type="number" className="form-control" />
                            </div>
                            <div className="mb-3 form-check">
                                <input required type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Agree to the terms and conditions</label>
                            </div>
                            {/* <Button variant="contained" color="success">
                        Success
                    </Button> */}

                            <button type="submit" className="btn btn-primary my-3">Submit</button>
                       
                            {/* <button type="button" className="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handlebtn}>
                            Submit
                            </button>

                            {
                                modal && <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Successful</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Booking Confirmed
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            }
                             */}


                            {/* <FloatingActionButtons value="Submit"/> */}
                        </form>
                    </div>
            }
        </>
    )
}
