import { signInWithEmailAndPassword } from "@firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router";
import { useState } from "react";
import { db, ref, onValue } from "../config/firebase";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const Login = (e) => {
      setLoader(true);
    e.preventDefault();

    let obj = {
      email,
      password,
    };

    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((response) => {
        console.log(response);
        const refrence = ref(db, `/users/${response.user.uid}`);

        onValue(refrence, (snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            let userObj = snapshot.val();
            navigate("/", { state: userObj });
          }

          setEmail("");
          setPassword("");
        //   alert("Log In Successful");
        console.log('succesfull')
        });
      })
      .catch((err) => {
        console.log(err.message);
        alert("Wrong Email or Password");
      });
    setLoader(false);
  };
  // d-flex justify-content-center align-items-center
  return (
    <>
    <Navbar/>
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "black",
        marginTop: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        height: "100vh",
      }}
    >
      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <div
          className=" p-4 "
          style={{ backgroundColor: "white", borderRadius: "20px" }}
        >
          <h1>Login</h1>
          <br />
          <form onSubmit={(e) => Login(e)}>
            <input
              className="p-2 m-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email Address" required
            />
            <br />
            <input
              className="p-2 m-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password" required
            />
            <br />
            <br />
            <Button value="Login" />
          </form>
          <hr />
          <h4>Don't Register?</h4>
          
          <Link to="/signup">Sign Up</Link> Here
        </div>
      )}
    </div>
    </>
  );
}
