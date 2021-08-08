
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './components/Home';
import Login from "./components/Login"
import Register from './components/Register';
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
    </div>
  );
}

export default App;
