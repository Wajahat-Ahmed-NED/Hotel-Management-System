import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { auth, db,ref,set } from '../config/firebase'

export default function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Signup = (e) => {
        e.preventDefault()
        let obj = {
            name,
            email,
            password,
        }
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
            let uid = res.user.uid;
            console.log(uid);
            obj.uid = uid;
            const refrence = ref(db, `/users/${obj.uid}`);
            console.log(obj.uid)
            set(refrence, obj).then(() => {
              setEmail("");
              setPassword("");
              setName("");
              alert("user created Successfully");
            })
            .catch((err)=>{console.log(err.message)})

          }).catch((err) => {
                console.log(err.message)
            })
        console.log(obj)

    }
    // provider((e)=>{
    //     console.log(e)
    // })
    return (
        <>
            <h1>Sign up</h1>
            <form onSubmit={(e) => { Signup(e) }}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your Name" /><br />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email Address" /><br />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" /><br />
                <Button value="Sign up" />

            </form>
            <hr />
            <h3>Already have an account?</h3>
            <Link to="/login">Login</Link> Here
        </>
    )
}
