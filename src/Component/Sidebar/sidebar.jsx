import React, { useContext, useState } from 'react';
import './sidebar.css';
import  {assets} from '../../assets/assets';
import { Context } from '../../Context/Context';

function sidebar() {

        const [extended , setExtended] = useState(false);
        const {onSent , prevPrompts , setRecentPrompt, newChat} = useContext(Context);

        const loadPrompt = async (prompt) => {
              setRecentPrompt(prompt);
             await onSent(prompt);
        }

  return (
    <>  
       <div className="sidebar">
             
{/* ------------------------------------------------------------------------------------- */}

             <div className="top">

                <div className="menu-logo">
                   <img onClick={() => setExtended(!extended)} className='menu' src= {assets.menu_icon} alt="" />
                </div>

                 <div onClick={() => newChat()} className="new-char">
                   <img src={assets.plus_icon} alt="" />
                   { extended ? 
                     <p>New chat</p> 
                   : null }  
                 </div>

                  {
                   extended ? 
                     <div className="recent">
                       <p className="recent-title">Recent</p>
                        {
                           prevPrompts.map((item,index) => {
                              return ( 
                                 <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
                                   <img src={assets.message_icon} alt="" />
                                   <p>{item.slice(0,18)}...</p> 
                                 </div>
                               )
                            })
                        }

                          {/* <div className="recent-entry" key={index}>
                            <img src={assets.message_icon} alt="" />
                            <p>{item}...</p> 
                          </div> */}

                     </div>
                    : null
                  }

             </div>

{/* ------------------------------------------------------------------------------------- */}

             <div className="bottom">

                     <div className="bottom-item recent-entry">
                             <img src={assets.question_icon} alt="" />
                           {
                            extended ? 
                              <p>help</p> 
                            : null
                           }  
                     </div>

                     <div className="bottom-item recent-entry">
                             <img src={assets.history_icon} alt="" />
                            {
                             extended ?
                              <p>Activity</p>        
                             : null
                            } 
                     </div>

                     <div className="bottom-item recent-entry">
                             <img src={assets.setting_icon} alt="" />
                            {
                             extended ?
                             <p>setting</p>
                             : null
                            } 
                     </div>

             </div>

{/* ------------------------------------------------------------------------------------- */}

             </div>
    </>
  ); 
}

export default sidebar;
