import React from 'react'
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {
    ref,
    db,
    onChildAdded,
    remove,
} from "../config/firebase";
import { onAuthStateChanged, signOut } from '@firebase/auth';
import { auth } from '../config/firebase';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import FloatingActionButtons from '../components/MuiButton';
import Button from '../components/Button';

function Home() {
    const navigate = useNavigate()
    const [data1, setData1] = useState([])
    const [display, setDisplay] = useState(false)
    const [login, setLogin] = useState(false)
    const [zero, setZero] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid
                console.log(uid)
                setLogin(true)
                // setuserLogin(true);

            }
            else {
                setLogin(false)
            }


        })
    }, [])

    const data = [
        {

            room: "2", location: 'Karachi',
            price: 2500,
            title: 'Family Rooms',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',
            paragraph: 'Best for new couples have 1 room with all luxuries',
        },
        {
            room: '2', location: 'Karachi',
            price: 2500,
            title: 'Suite Rooms',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',

            paragraph: 'Best for new couples have 1 room with all luxuries',
        },
        {
            room: '1', location: 'Lahore',
            price: 2500,
            title: 'Luxury Rooms',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',

            paragraph: 'Best for new couples have 1 room with all luxuries',
        },
        {
            room: '3', location: 'Murree',
            price: 3500,
            title: 'Delux Rooms',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',

            paragraph: 'Best for new couples have 1 room with all luxuries',
        },
        {
            room: '5', location: 'Islamabad',
            price: 6500,
            title: 'Family Rooms',
            paragraph: 'Best for new couples have 1 room with all luxuries',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',

        },
        {
            room: '2', location: 'Karachi',
            price: 2500,
            title: 'Superior Rooms',
            paragraph: 'Best for new couples have 1 room with all luxuries',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',

        },
        {
            room: '1', location: 'Lahore',
            price: 1500,
            title: 'Superior Rooms',
            paragraph: 'Best for new couples have 1 room with all luxuries',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',

        },
    ]



    const handleSelect = (e) => {
        const a = e.target.value
        console.log(a)
        console.log(typeof (a))

        let search = data.filter((e) => e.room === a)
        if (search.length!==0){
            console.log(search)
            setData1(search)
            setDisplay(true)
            setZero(false)
        }
        else{
            console.log(search.length)
            setZero(true)
            setDisplay(false)
        }

    }

    const handleChange=()=>{
        setDisplay(false)
        setZero(false)
    }
    return (
        <>
            <Navbar login={login} />
            <h1 className='m-4'>Hotels-Available For Rent</h1>

            <div className="container p-4 d-flex justify-content-between align-items-center">
            <label htmlFor="select">Search With No Of Rooms</label>
            <select id="select" className="mx-5 form-select"onChange={(e) => handleSelect(e)}>
                <option>No of Rooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            </div>


            <div className="container d-flex flex-row-reverse bd-highlight ">
            <button className='btn btn-secondary m-4 mx-5 px-5' onClick={handleChange}>View All</button>

            </div>



            <div className="container">
                
                <div className="row">

                {
                    display ? data1.map((e, i) => {
                    
                        return (
                            <div className="col-md-4 my-3" key={i}>
                                <Cards title={e.title} paragraph={e.paragraph} url={e.url} room={e.room} price={e.price} location={e.location} />
                            </div>)
                
                }):
                zero? <h1 className="m-3" style={{color:'red'}}>No Hotel Available</h1>
                
                :

                data.map((e, i) => {
                    return (
                        <div className="col-md-4 my-3" key={i}>
                            <Cards title={e.title} paragraph={e.paragraph} url={e.url} room={e.room} price={e.price} location={e.location} />
                        </div>)
                })


                }


                


                    {/* {
                        data.map((e, i) => {
                            return (
                                <div className="col-md-4 my-3" key={i}>
                                    <Cards title={e.title} paragraph={e.paragraph} url={e.url} room={e.room} price={e.price} location={e.location} />
                                </div>)
                        })
                    } */}

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Home;