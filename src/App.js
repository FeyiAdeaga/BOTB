import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Test from './Pages/Test';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="*" element={<Test/>} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
