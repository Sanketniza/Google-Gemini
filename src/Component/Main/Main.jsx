import React, { useContext } from 'react';
import './Main.css'
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';

const Main = () => {

    const{onSent , recentPrompt , showResult , loading , resultData , setInput , input } = useContext(Context)

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

                {!showResult ?
                  <>
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
                  </>
                  : 
                      <div className="result">
                          <div className="result-tittle">
                            <img src={assets.user_icon} alt="" />
                            <p> {recentPrompt} </p>
                          </div>

                          <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {
                                loading ? 
                                  <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                  </div>
                                :
                                  <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                            }
                          </div>
                      </div>
                }

                 {/* <div className="greet">
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
                  </div>  */}

                  <div className="main-bottom">
                     <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt=""/>
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={ () => onSent()} src={assets.send_icon} alt="" />
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