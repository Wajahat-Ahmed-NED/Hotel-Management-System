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

function Home() {
    const navigate=useNavigate()

    const [login, setLogin] = useState(false)


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
        
    
    })}, [])
    
    const data = [
        {
            
            room:2,location:'Karachi',
            price:2500,
            title: 'Family Rooms',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',
            paragraph: 'Best for new couples have 1 room with all luxuries',
        },
        {
            room:2,location:'Karachi',
            price:2500,
            title: 'Suite Rooms',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',

            paragraph: 'Best for new couples have 1 room with all luxuries',
        },
        {
            room:1,location:'Lahore',
            price:2500,
            title: 'Luxury Rooms',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',

            paragraph: 'Best for new couples have 1 room with all luxuries',
        },
        {
            room:3,location:'Murree',
            price:3500,
            title: 'Delux Rooms',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',

            paragraph: 'Best for new couples have 1 room with all luxuries',
        },
        {
            room:5,location:'Islamabad',
            price:6500,
            title: 'Family Rooms',
            paragraph: 'Best for new couples have 1 room with all luxuries',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',

        },
        {
            room:2,location:'Karachi',
            price:2500,
            title: 'Superior Rooms',
            paragraph: 'Best for new couples have 1 room with all luxuries',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',

        },
        {
            room:1,location:'Lahore',
            price:1500,
            title: 'Superior Rooms',
            paragraph: 'Best for new couples have 1 room with all luxuries',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq8tcNed99tJ7GHEjgT_5_Ai48OjOhkoU0w&usqp=CAU',

        },
    ]
    return (
        <>
            <Navbar login={login} />
            <div className="container">
                <h1 className='my-3'>Hotels-Available For Rent</h1>
                <div className="row">


                    {
                        data.map((e, i) => {
                            return (
                                <div className="col-md-4 my-3" key={i}>
                                    <Cards title={e.title} paragraph={e.paragraph} url={e.url} room={e.room} price={e.price} location={e.location} />
                                </div>)
                        })
                    }

                </div>


            </div>
            <Footer/>
        </>
    )
}

export default Home;