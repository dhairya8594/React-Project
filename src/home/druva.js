import React from 'react';
import './druva.css';
import Druva from './druva.png';
import Image from './image-147.png';
import Image2 from './image-34.png';
import Vector from './img3.png';
import Img3 from './Vector.png';
import Cards1 from './Rectangle.jpg';
import Card2 from './card2.png';
import Card3 from './card3.png';
import Fire from './fire 1.png';



function druva() {
  return (
    <div>
    <div className="home">
        <div className="image">
          <img className="img" alt="Image" src={Image} />
          <img className="img2" alt="Image" src={Image2} />

         </div>
        <div className='shopnow'>
            <img src={Druva} alt='druva' className='ddru'/>
            <div className="get-your-favorite"><p>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Get Your <br />
               Favorite Discounts</p>
            </div>

             <div className="label">
                <div className="element-OFF">30 %&nbsp;&nbsp;OFF</div>
             </div>

             <div className="bbt">
                <div className="div-wrapper">
                <div className="text-wrapper">Shop Now</div>
             </div>
             </div>
             <div className="off">
               <p>FLAT&nbsp;&nbsp;30%&nbsp;&nbsp;OFF</p>
              </div>



            </div>
         </div>
           <div className='flash-sale'>
            <div className="frame-flash">
             <img className="vector" alt="Vector" src={Vector} />
              <img className="img3" alt="Img3" src={Img3} />
               <p className="offer">&nbsp;&nbsp;Offer</p>
             </div>
             {/* sidebar */}
             <div className='sidebar'>
               <div className="bl-box">
                <div className="software-wrapper">
                <p className="software" alt="Software">Software</p>&nbsp;&nbsp;<i className="down"></i>
                </div>
                </div>  
                <div className="bl-box">
                <div className="software-wrapper">
                 <p className="software" alt="Software">hardware</p>&nbsp;&nbsp;<i className="down"></i>
                  </div>
                 </div>  
                 <div className="bl-box1">
                <div className="software-wrapper">
                <p className="software" alt="Software">More Categories</p>
                </div>
                </div>            
                 </div>
             {/* ----cards----   */}
             &nbsp;
             <div className='bar'>
               {/* <div className="bar"> */}
                <div className="divv">
                <h2 className="img"  >FlashSale</h2>
                <img className="fire" alt="Fire" src={Fire} />
                </div>
                <div className="divv-2">
                <h3 className="img" >ENDING IN</h3>
                <div className="divv-3">
                <div className="div-wrapperr">
                <div className="text-wrapperr">30</div>
                </div>
                <div className="text-wrapperr-2">:</div>
                <div className="div-wrapperr">
                <div className="text-wrapperr">00</div>
                </div>
                <div className="text-wrapperr-2">:</div>
                <div className="div-wrapperr">
                <div className="text-wrapperr">01</div>
                </div>
                {/* </div> */}
                </div>
                </div>
                
             </div>
             <div class="card-list">
        <a href="#" class="card-item">
            <img src={Cards1} alt="Card Image"/>
            <h3>SAP</h3>
            <div className="bbx">
              <div className="t">Features</div>
              <div className="t">Plan</div>
              <div className="t">Write Rewive</div>
            </div>
            
        </a>
        <a href="#" class="card-item">
            <img src={Card2} alt="Card Image"/>
            <h3>Office 365</h3>
            <div className="bbx">
              <div className="t">Features</div>
              <div className="t">Plan</div>
              <div className="t">Write Rewive</div>
            </div>
        </a>
        <a href="#" class="card-item">
            <img src={Card3} alt="Card Image"/>
            <h3>Flow Account</h3>
            <div className="bbx">
              <div className="t">Features</div>
              <div className="t">Plan</div>
              <div className="t">Write Rewive</div>
            </div>
        </a>
    </div>
             </div>
             
    
    </div>
  )
}

export default druva;
