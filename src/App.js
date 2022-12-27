
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from "./context/notes/Notestate";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";


function App() {
 const [alert, setalert] = useState({type : "", message: ""})
  
  return (
    <div>
<NoteState>
  <BrowserRouter>
  <Navbar/>
  <Alert message={alert.message} type={alert.type}/>
  <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login alert={setalert} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    </BrowserRouter>

    </NoteState>
  </div>
  );
}

export default App;
