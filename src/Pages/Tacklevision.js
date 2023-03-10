import React, { Component } from 'react'
import '../Pages/tv.css'
import pie_chart from './PieChart.png'
import mok from '../Pages/mockup.png'
import c from '../Components/logo.png'

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
                    <div className='pic_text'>
                        <div className='Title'>The future of fan engagement in the NFL</div>
                        <div className='sub'>Tackle Vision brings fans directly to the sidelines by meeting you right where you are. With our cutting-edge augmented and virtual reality technology, NFL fans typically get excited and thrilled by the in-stadium experience or having a watch party with friends or family.</div>
                    </div>
                    
                    <div><img className='main_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HfUjyzuEM9Jw0aoskyEkLUO-XKp9u0Iz-w&usqp=CAU" alt="" /></div>
                </div>

                <div className="footer">
                    <div>
                        Our app aims for an increased user experience for fans. It strives to do this by creating an experience that allows for the game to be brought to the them wherever they might be on the go e.g on the sidelines or the comfort of their home. This experience compromises of three major features that allows for active particaption and increased fan engagement.
                        Brief overview of the features are: sideline social, sideline ..., and sidekick. Also, to serve as an incentive, we have the sidehustle point system that allows for users to accumulate points by being active in the feature, sharing their experiences, and in giving preditions to earn points. In summary, our app drives for fan engagment and we plan on achieving
                        this by bringing the game to them.
                    </div>
                    <div className='mock'>
                        <img src={mok} alt="" className="mock" />
                    </div>
                </div>
                <div className="sponsors">
                    <div className="logo"><img className = "logo" src={c} alt="" /></div>
                    <div className="sponsor_footer">
                    © 2023 NFL Enterprises LLC. NFL and the NFL shield design are registered trademarks of the National Football League.The team names, logos and uniform designs are registered trademarks of the teams indicated. All other NFL-related trademarks are trademarks of the National Football League. NFL footage © NFL Productions LLC.
                    </div>
                </div>


            </div>
        )
    }
}
