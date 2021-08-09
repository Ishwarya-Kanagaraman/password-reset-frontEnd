
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './components/Home';
import Verify from './components/Verify';
import Login from "./components/Login"
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Route exact path="/">
       <Home/>
     </Route>
     <Route path="/signup">
       <Register/>
     </Route>
     <Route path="/login">
       <Login/>
     </Route>
     <Route path="/verify/:token">
       <Verify/>
     </Route>
     <Route path="/forgot-password">
     <ForgotPassword/>
     </Route>
     <Route path="/reset-password">
     <ForgotPassword/>
     </Route>
    </div>
  );
}

export default App;
