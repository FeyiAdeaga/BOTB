import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Test from './Pages/Test';

function App() {
  return (
    
    <div className="App">

      <Navbar></Navbar>

      <BrowserRouter>
      <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="*" element={<Test/>} />
      </Routes>
      </BrowserRouter>

   
    </div>
  );
}

export default App;
