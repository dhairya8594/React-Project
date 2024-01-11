import React from 'react';
import './footer.css';
import Res from './Responsive.png';
import Mm from './image 149.png';
import Nn from './n.png';
import News from './Vector.png'
import Linked from './link.png'

function footer() {
  return (
    <div className='footer'>
      <div className='suport'>
      <div class="card-list-f">
              <a href="#" class="card-item-f">
             <img src={Res} alt="Card Image"/>
             <p className='hed'>15000+ Softwares</p>
             
            
            
         </a>
       
         <a href="#" class="card-item-f">
            <img src={Mm} alt="Card Image"/>
            <p className='hed'>Best Price Guaranteed</p>
            
         </a>
         <a href="#" class="card-item-f">
            <img src={Nn} alt="Card Image"/>
           <p className='hed'>Free Expert Consultation</p>

         </a>
          </div>


      </div>
      <div className="box-f">
        <div className="rectangle-f">
            <div className='left-s'>
        <img className="News" alt="Vector" src={News} />
        <h4 className='sinup'>Signup For Newsletter</h4>
        <p className='sinup'>We’ll never share your email address with a third party.</p>
        </div>
        <div className='right-s'>
        <h3 className='jhj'>Linked</h3>

        <img src={Linked} className='link'/>
        </div>

       

</div>
        </div>
        <div className="box-ll">
<div className="rectangle-ll" >
    <p className='copy'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;©2022 ConQt All Right Reserved. Deigned by Tech curve Al & Innovation Co., Ltd</p>
</div>
</div>
    </div>
  )
}

export default footer
