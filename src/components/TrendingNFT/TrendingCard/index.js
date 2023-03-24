import React from "react";
import "./trendingcard.css"


// userhandle:"Document",
// user_name:"PENS",
// user_logo

const TrendingCard = (props) => {
  const{nft} =props;
  return (
    <div className="trending-card">
        <div className="tc-inner-wrapper">
           
            <div className="tc-content">
            <div className="tc-ui-userhandle">{nft.userhandle}</div>
                <img alt={nft.user_name} src={nft.banner} className="tc-banner"/>
                <div className="tc-user-info">
                    <div className="tc-ui-left">
                    <img
                    alt={nft.user_name}
                    className="tc-user-logo"
                    src={nft.user_photo}
                    />
                    
                    <div className="tc-ui-username">{nft.user_name}</div>
                   
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingCard