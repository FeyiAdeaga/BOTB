import React, { Component } from 'react'
import '../Pages/tv.css'
import pie_chart from './PieChart.png'

export default class Tacklevision extends Component {
    render() {
        return (
            <div className='main_page'>
                <div className="intro">
                    <div className='intro_text'>
                        <div>bringing fans</div>
                        <div>to the sideline</div>
                    </div>

                    <div><img className='main_img' src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.8562-6/306142498_1996009553932154_5207118015223801656_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6825c5&_nc_ohc=CxamukP_RAMAX8MR2kL&_nc_ht=scontent-dfw5-2.xx&oh=00_AfDonHJ-z0XZLE9Cl-WvbdpZbZG3ltT_RYJYFTunplJz3g&oe=640ECE9F" alt="" /></div>

                </div>
                <div className="mockup_img"></div>
                <div className="mid">
                    <div><img className='main_img' src={pie_chart} alt="" /></div>
                    <div>An oppurtunity to tune into untapped territory</div>
                </div>

                <div className='pic'>
                    
                    <div><img className='main_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HfUjyzuEM9Jw0aoskyEkLUO-XKp9u0Iz-w&usqp=CAU" alt="" /></div>
                </div>


            </div>
        )
    }
}
