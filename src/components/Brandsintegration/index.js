import React from "react";
import "./brandsintegration.css"

const Brandsintegration = () => {
   
    return (
//    <span>Technology Supported</span>
  <div>
  <div className="title absolute-center"> <span className="heading-gradient" >Supported</span>
  </div>
  <div className="brands-integration">
    {/* <h1 >Technology Supported</h1> */}
    
    <img 
    src={require('../../Asset/metamask.png')} 
    className="bi-logos" 
    alt="brand-logos"
    />

    <img 
    src={require('../../Asset/solidity1.png')} 
    className="bi-logos" 
    alt="brand-logos"
    />

<img 
    src={require('../../Asset/hyperledger.png')} 
    className="bi-logos" 
    alt="brand-logos"
    />

<img 
    src={require('../../Asset/eth.png')} 
    className="bi-logos" 
    alt="brand-logos"
    />
    <img 
    src={require('../../Asset/react.png')} 
    className="bi-logos" 
    alt="brand-logos"
    />
        <div className="tf-r-bg-blob"></div> 
    </div>
    </div>
  );
};

export default Brandsintegration;