import React from 'react';
import './page2.css';
import Card1 from './CARD1.png';
import Card2 from './CARD2.png';
import Per from './per.png';
import Def from './def.png';
import './sep.css';


function page2() {
  return (
  <div className='new'>
    <div className='bar'>
               {/* <div className="bar"> */}
                <div className="divv">
                <h2 className="img"  >NEW ARRIVAL</h2>
                {/* <img className="fire" alt="Fire" src={Fire} /> */}
                </div>
                
                {/* </div> */}
               
                
             </div>    
    <div className='sidebar2'>
   
      <img src={Def}  className='def'   />
      
      </div>
      <div class="card-list2">
        <a href="#" class="card-item2">
            <img src={Card1} alt="Card Image"/>
            <div className='text'>
                <h3>Quis ullamcorper</h3>
                <div className='ggg'>
                <p className='ttt'>Available:200  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sold:10</p>

                <img src={Per} alt='per'className='per'/></div>

            </div>
            <div className='b-get-p'>

                <button className='g-p'>Get Price</button>
            </div>
            
            
        </a>
       
        <a href="#" class="card-item2">
            <img src={Card2} alt="Card Image"/>
            <div className='text'>
                <h3>Quis ullamcorper</h3>
                <p className='ttt'>Available:200  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sold:10</p>
                <img src={Per} alt='per'className='per'/>

                </div>
                <div className='b-get-p'>

                <button className='g-p'>Get Price</button>
            </div>
        </a>
    </div>
    <div className='offer'>
         <div div className='bar-f'>
               {/* <div className="bar"> */}
                <div className="divv">
                <h2 className="img"  >Sepcial offer of the day</h2>
                {/* <img className="fire" alt="Fire" src={Fire} /> */}
                </div>
                <div className="divv-2">
                {/* <h3 className="img" >ENDING IN</h3> */}
                <div className="divv-3">
                
                
                
                {/* </div> */}
                </div>
                </div>
                
              </div>
         <div className="sep">
   
             <div className="LATEST-PRODUCTS-wrapper">
             <h3 className="img-s" >LATEST PRODUCTS</h3>
             </div>
             <div className="div-s">
             <div className="div-2-s">
             {/* <img className="image-s" alt="Image" src="image-57.png" /> */}
             <div className="div-3-s">
             <p className="img-s" >Quis ullamcorper</p>
             {/* <img className="img-s" alt="Frame" src="frame-102.svg" /> */}
             </div>
             </div>
             <div className="div-4-s">
             {/* <img className="image-s" alt="Image" src="image.png" /> */}
             <div className="div-3-s">
             <p className="img-s" >Quis ullamcorper</p>
             {/* <img className="img-s" alt="Frame" src="image.svg" /> */}
             </div>
             </div>
             {/* <img className="image-2" alt="Image" src="image-32.png" /> */}
             <div className="div-5-s">
             <p className="img-s" >Quis ullamcorper</p>
             {/* <img className="img-s" alt="Frame" src="frame-102-2.svg" /> */}
             </div>
             <div className="group-s">
             {/* <img className="image-3-s" alt="Image" src="image-56.png" /> */}
             <p className="img-s" >Quis ullamcorper</p>
             {/* <img className="img-2-s" alt="Frame" src="frame-102-3.svg" /> */}
             </div>
             </div>
             </div>
             <div class="card-list3">
              <a href="#" class="card-item3">
             <img src={Card1} alt="Card Image"/>
             <div className='text1'>
                <h5>Quis ullamcorper</h5>
                <div className='ggg'>
                <p className='tttt'>Available:200  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sold:10</p>

                {/* <img src={Per} alt='per'className='per'/> */}
                </div>

             </div>
             <div className='b-get-p'>

                <button className='g-p'>Get Price</button>
            </div>
            
            
         </a>
       
         <a href="#" class="card-item3">
            <img src={Card2} alt="Card Image"/>
            <div className='text1'>
                <h5>Quis ullamcorper</h5>
                <p className='tttt'>Available:200 Sold:10</p>
                {/* <img src={Per} alt='per'className='per'/> */}

                </div>
                <div className='b-get-p'>

                <button className='g-p'>Get Price</button>
            </div>
         </a>
         <a href="#" class="card-item3">
            <img src={Card2} alt="Card Image"/>
            <div className='text1'>
                <h5>Quis ullamcorper</h5>
                <p className='tttt'>Available:200  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sold:10</p>
                {/* <img src={Per} alt='per'className='per'/> */}

                </div>
                <div className='b-get-p'>

                <button className='g-p'>Get Price</button>
            </div>
         </a>
          </div>
          </div>
      </div>  

  )
}

export default page2
