import React from 'react'
import '../Components/navbar.css'
import logo from './logo.png'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav-bar'>



      <Outlet />

      <div className="left">
      <div className="left_ele">
        <img src={logo} className = 'nfl_logo' alt="Nfl logo" />
      </div>
      <div className="left_ele">News</div>
      <div className="left_ele">Scores</div>
      <div className="left_ele">Schedule</div>
      <div className="left_ele">Videos</div>
      <div className="left_ele">Teams</div>
      <div className="left_ele">Players</div>
      <div className="left_ele">Stats</div>
      {/* <div className="left_ele"><Link to="/">NFL TV</Link></div> */}
      </div>
      <div className="right">
      <div className="right_ele">Teams</div>
      </div>
    </div>
  )
}
