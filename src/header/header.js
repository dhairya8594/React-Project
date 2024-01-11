import React from "react";
import "./header.css";
import logo from './logo-t-shirt-4-1.png';
import Group from './Group.png';
import vec1 from './Vec1.png';
import vec2 from './Vec2.png';
import help from './help.png';


function App() {
    return (
    <div className="box">
        <div className="rectangle">
        <div className="frame">
<div className="div">
<div className="div-2">
<img className="logo-t-shirt" alt="logo" src={logo} />
<div className="div-3">
<div className="frame-wrapper">
<div className="div-4">
<button className="img">Find vendor</button>
</div>
</div>
<div className="frame-wrapper">
<div className="div-4">
<button className="img">Find Customer</button>
</div>
</div>
</div>
</div>
<div className="div-wrapper">
<div className="div-5">
<div className="frame-wrapper-2">
<div className="div-4">
<img className="group" alt="Group" src={Group} />
<div className="text-wrapper">Call Expert</div>
</div>
</div>
<div className="fr">
    <div className="ic">
    <img src={vec1} alt="vec1"/>
    <img src={vec2} alt="vec2"/>
</div>
</div>
</div>
</div>
</div>
<div className="div-6">
<div className="div-5">
<div className="div-4">
    <div className="div-d">
<div className="text-wrapper-2">All Categories   <i className="down"></i></div>
<div className="dropdown-content">
    <a href="#">item1</a>
    <a href="#">item1</a>
    <a href="#">item1</a>
    </div>
</div>
</div>
<div className="div-5">
<div className="div-4">
    <div className="div-d">
<div className="text-wrapper-2">By Industry    <i className="down"></i></div>
<div className="dropdown-content">
    <a href="#">item1</a>
    <a href="#">item1</a>
    <a href="#">item1</a>
    </div>
</div>
</div>
<div className="div-5">
<div className="div-4">
    <div className="div-d">
<div className="text-wrapper-2">By Department   <i className="down"></i></div>
<div className="dropdown-content">
    <a href="#">item1</a>
    <a href="#">item1</a>
    <a href="#">item1</a>
    </div>
</div>&nbsp;
<div className="div-5">
    
<div className="div-4">
<div className="text-wrapper-2">Compare Product</div>
</div>
<div className="div-5">
<div className="div-4">
<div className="text-wrapper-2">Sell your Products</div>
</div>
<div className="div-5">
<div className="div-4">
<div className="text-wrapper-2">Offer</div>
</div>
</div>
<div className="ddv"></div>
<div className="div-7">
<div className="text-wrapper-3">Write Review</div>
<div className="div-8">
<div className="text-wrapper-3">Need Help</div>
<img  alt="help" src={help} />
</div>
</div>
</div>
</div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>

    );
};
export default App;
