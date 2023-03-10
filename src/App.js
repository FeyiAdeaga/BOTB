import logo from './logo.svg';
import './App.css';
import Tacklevision from './Pages/Tacklevision';
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
              <Route path="/TV" element={<Tacklevision/>}/>
      </Routes>
      
    </div>
    </Router>

  );
}

export default App;
