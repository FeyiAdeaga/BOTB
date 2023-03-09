import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Test from './Pages/Test';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>

      <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="*" element={<Test/>} />
      </Routes>
      
    </div>
    </Router>

  );
}

export default App;
