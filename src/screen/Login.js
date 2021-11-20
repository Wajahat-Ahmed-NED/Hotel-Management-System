import { signInWithEmailAndPassword } from '@firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { db,ref,onValue } from '../config/firebase'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const Login = (e) => {
        e.preventDefault();

        let obj = {
            email,
            password,
        }

        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((response) => {
                console.log(response)
                const refrence = ref(db, `/users/${response.user.uid}`);

                onValue(refrence, (snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val());
                        let userObj = snapshot.val();
                        navigate("/", { state: userObj });
                    }


                    setEmail("")
                    setPassword("")
                    alert("Log In Successful")         
                })  
            })
            .catch((err) => {
                console.log(err.message)
                alert("Wrong Email or Password")
            })
        }
    return (
            <>
                <h1>Login</h1>
                <form onSubmit={(e) => Login(e)}>

                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email Address" /><br />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" /><br />
                    <Button value="Login" />

                </form>
                <hr />
                <h3>Don't Register?</h3>
                <Link to="/signup">Sign Up</Link> Here
            </>
        )
    
    }