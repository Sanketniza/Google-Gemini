import React from 'react';
import './Main.css'
import { assets } from '../../assets/assets';

function Main() {
  return (
   
     <>
         <div className="main">

{/* -------------------------------------------------------------------------------------------- */}

              <div className="nav">
                  <p>Gemini</p>
                  <img src={assets.user_icon} alt="" />
              </div>

{/* -------------------------------------------------------------------------------------------- */}

              <div className="main-container">

                  <div className="greet">
                     <p><span>Hello , sanket</span></p>
                     <p> How , May I help you ?</p>
                  </div>

                  <div className="cards">
                    <div className="card">
                        <p>suggest please to see on a new tab </p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>suggest please to see on a new tab </p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>suggest please to see on a new tab </p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>suggest please to see on a new tab </p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                  </div>

                  <div className="main-bottom">
                     <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt=""/>
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                     </div>

                     <p className='bottom-info'>Powered by OpenAI Gemini to help you in your career so thank you sanket for making this app for coder  </p>
                  </div>

              </div>

{/* -------------------------------------------------------------------------------------------- */}

         </div>
     </>
)
}

export default Main