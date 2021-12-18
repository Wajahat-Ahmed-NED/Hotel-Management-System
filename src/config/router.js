
import  Home  from "../screen/Home";
import  Contact  from "../screen/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import FloatingActionButtons from "../components/MuiButton";
import Dashboard from "../screen/Dashboard";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import About from "../screen/About";
import Booking from "../screen/Booking";
import Payment from "../screen/Payment";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/aboutus' element={<About/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/payment' element={<Payment/>}/>

          <Route path='/muibutton' element={<FloatingActionButtons/>}/>
        </Routes>
      </div>
    </Router>
  );
}

            
     