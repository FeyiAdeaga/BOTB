import React from 'react'
import '../Components/navbar.css'
import logo from './logo.png'
import profile from './profile.png'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav-bar'>


      {/* <Outlet /> */}

      <div className="left">
      <div className="left_ele">
        <img src={logo} className = 'nfl_logo' alt="Nfl logo" />
      </div>
      <div className="left_ele">News</div>
      <div className="left_ele">Scores</div>
      <div className="left_ele">Players</div>
      <div className="left_ele">Sidekick</div>
      <div className="left_ele">SideSquad</div>
      <div className='left_ele'><Link>Test</Link></div>
      </div>
      <div className="middle"><Link to='/TV'>Middle</Link></div>

      <div className="right">
      <div className="right_ele">

            Hi Day !
            
      </div>
      <div className="right_ele">
      <img src={profile} className='profile-pic' alt="" />
      </div>
      </div>
    </div>
  )
}
