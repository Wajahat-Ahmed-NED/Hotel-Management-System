// import logo from './logo.svg';
import './App.css';
import AppRouter from './config/router';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Button value="Lets Go" onClick={() => { alert("Button was clicked") }} />
      <div className="container my-5">
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
      </div>
    </div>
  );
}

export default App;
