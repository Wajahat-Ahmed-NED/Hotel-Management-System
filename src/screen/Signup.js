import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, db, ref, set } from "../config/firebase";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(18);
  const [cnic, setCnic] = useState(0);
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()

  //   const handleBtn=()=>{

  //   }
  const Signup = (e) => {
    e.preventDefault();
    // setLoader(true)
    let obj = {
      name,
      email,
      password,
      age,
      cnic
    };
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        setLoader(true)
        let uid = res.user.uid;
        console.log(uid);
        obj.uid = uid;
        const refrence = ref(db, `/users/${obj.uid}`);
        console.log(obj.uid);
        set(refrence, obj)
          .then(() => {
            setEmail("");
            setPassword("");
            setName("");
            setAge(0);
            setCnic("");
            alert("user created Successfully");

            navigate("/login")
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
    setLoader(false)
    console.log(obj);
  };
  // provider((e)=>{
  //     console.log(e)
  // })
  return (
    <>
    <Navbar/>
    <div
      div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "black",
        marginTop: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        height: "100vh",
      }}
    >
      {
        loader ? <h1>Loading...</h1> :

          <div
            className=" p-4 "
            style={{ backgroundColor: "white", borderRadius: "20px" }}
          >
            <h1>Sign up</h1>
            <br />
            <form
              onSubmit={(e) => {
                Signup(e);
              }}
            >
              <input
                className="p-1 m-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your Name"
              />
              <br />
              <input
                className="p-1 m-1"
                onChange={(e) => setAge(e.target.value)}
                type="number"
                placeholder="Enter your Age"
              />
              <br />
              <input
                className="p-1 m-1"
                onChange={(e) => setCnic(e.target.value)}
                type="text"
                placeholder="Enter your CNIC"
                maxLength="13"
              />
              <br />
              {/* <select className="p-1 m-1 " style={{width:'195px'}}>
            <option selected>Select Country</option>
            <option value="1">Pakistan</option>
            <option value="2">India</option>
            <option value="3">USA</option>
          </select><br/> */}

              <input
                className="p-1 m-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email Address"
              />
              <br />

              {/* <input type="text" id="username" name="username" maxlength="10"><br><br></br> */}
              <input
                className="p-1 m-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
              />
              <br />
              <br />
              <Button value="Sign up" />
            </form>
            <hr />
            <h4>Already have an account?</h4>
            <Link to="/login">Login</Link> Here
          </div>
      }
    </div>
    </>
  );
}
