import React from 'react'
import './home.css'
import free from "../Pages/free_agency.png"
import combine from "../Pages/combine.png"
import draft from "../Pages/draft.png"
export default function Home() {
  return (
    <div className='home'>
      <div className="main_stuff">
        <div className="free_agency home_child">
          <div className="sec_header">Free Agency</div>
          <div className="sub">
            Gregg Rosenthal analyzes the top teams in free agency.
          </div>
          <div className="gallery">
            <img className="Agency_gal" src={free} alt="" />
          </div>
        </div>
        <div className="combine home_child">
          <div className="sec_header">Combine</div>
          <div className="sub">Gregg Rosenthal analyzes the top teams in free agency. x</div>
          <div className="gallery">
            <img className="combine_gal" src={combine} alt="" />
          </div>
        </div>
        <div className="draft home_child">
          <div className="sec_header">Draft</div>
          <div className="sub">
            Exclusive NFL+ Draft content from Daniel Jeremiah
          </div>
          <div className="gallery">
          <img className = "draft_gal" src={draft} alt=""/>
          </div>
      </div>
      </div>
    </div>
  )
}
