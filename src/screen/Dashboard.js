import React from 'react'
// import Navbar from '../components/Navbar'
import Button from '../components/Button';
// import Cards from '../components/Cards';
import { onAuthStateChanged, signOut } from '@firebase/auth';
import { auth } from '../config/firebase';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
import {



  ref,
  db,
  onChildAdded,
  remove,
} from "../config/firebase";
import MenuAppBar from '../components/Header';

export default function Dashboard() {
  const [loader, setLoader] = useState(false)
  // const [userLogin, setuserLogin] = useState(false)
  const [userData, setuserData] = useState({})
  const [userList, setuserList] = useState([])
  const location = useLocation();
  const navigate = useNavigate();


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
  const getData = () => {
    let refrence = ref(db, "users/");
    let arr = [];
    onChildAdded(refrence, (snapshot) => {
      if (snapshot.exists()) {
        arr.push(snapshot.val());
        setuserList([...arr]);
      }
    });
  };
  const deleteUser = (id) => {
    const refrence = ref(db, "users/" + id);
    remove(refrence);

  };
  useEffect(() => {
    setLoader(true)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        console.log(uid)
        // setuserLogin(true);
        setLoader(false)
        setuserData(location.state)
        getData()
      }
      else {
        navigate("/login")
      }
    })

  }, [])


  return (
    <>
      {loader ? (
        <h1>Loading...</h1>
      ) : (<>
        {/* <Navbar /> */}
        <MenuAppBar name={userData.name} />

        <div>
          <h1>This is Dashboard</h1>
          <div className="container" style={{ textAlign: "center", border: '2px solid black', padding: '10px' }}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead >
              <tbody>
                {userList.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>
                        <IconButton
                          onClick={() => deleteUser(e.uid)}
                          aria-label="delete"
                          color="secondary"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div></>)}
      {/* <Button value="Lets Go" onClick={() => { alert("Button was clicked") }} /> */}
      {/* <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <Cards title="Cricket" paragraph="PCB decides to ban Umar Akmal for three years. " />

                    </div>
                    <div className="col-md-4">
                        <Cards title="Cricket" paragraph="PCB decides to ban Umar Akmal for three years. " />

                    </div>
                    <div className="col-md-4">
                        <Cards title="Cricket" paragraph="PCB decides to ban Umar Akmal for three years. " />

                    </div>
                </div>
            </div> */}
            <br/>
      <Button onClick={logout} value="SignOut" />

    </>
  )
}
