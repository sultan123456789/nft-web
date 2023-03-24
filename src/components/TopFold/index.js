import React from "react";
import Button from "../../common/Button";
import "./topfold.css";

const TopFold = () => {
  return (
  <div className="topfold absolute-center">
    <div className="tf-left">

      <div className="tf-heading"> 
      Discover, Collect, and             
      <span className="heading-gradient"> Immortal Save </span> Your Education Data by NFTs
      </div>

      <div className="tf-description"  ><span className="heading-gradient">By Oktafian Sultan Hakim</span>
      </div>

      <div className="tf-left-btns">
      <Button btnType = "PRIMARY" btnText="EXPLORE"/>
      <Button  btnType = "SECONDARY" btnText="Create NFTs" customClass='tf-left-secondary-btn' />
      </div>
      <div className="tf-left-infoStats">
        
      
        <div className="tf-is-infoItem absolute-center">
          <div className="tf-infoItem-count heading-gradient">2</div>
          <div className="tf-infoItem-label">University</div>
        </div>
        <div className="tf-is-infoItem absolute-center">
          <div className="tf-infoItem-count heading-gradient">100+</div>
          <div className="tf-infoItem-label">Books</div>
        </div>
        <div className="tf-is-infoItem absolute-center">
          <div className="tf-infoItem-count heading-gradient" >100+</div>
          <div className="tf-infoItem-label">Certificate</div>
        </div>
        <div className="tf-is-infoItem absolute-center">
          <div className="tf-infoItem-count heading-gradient">500+</div>
          <div className="tf-infoItem-label">Art</div>
        </div>
        
        <div className="tf-is-infoItem absolute-center">
          <div className="tf-infoItem-count heading-gradient">1000+</div>
          <div className="tf-infoItem-label">Publication</div>
        </div>

      </div>
     
    </div>
    <div className="tf-r-bg-blob">

</div>
    
    {/* <div className="tf-right">
      <div className="tf-right-diamond">
        <div className="tf-r-diamond-item">
          <img
          
          className="tf-r-diamond-img"
          alt="diamond-banner"
          src="https://i.seadn.io/gae/rPtBx7ydYqyxpVaJzy8ya8f-mfakTpMmAjXPEsE0fDO6FiXlD7m-9QQ_7KYf8OUUPH2W1Y8DZt6JAirRNxGodM4sxfm_LhLto6LFxw?auto=format&w=1000"
          />

          
          </div> 
      </div>
      
    </div> */}
   


    
    </div>
  )
}

export default TopFold;