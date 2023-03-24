import React from "react";
import { INFO_ITEMS } from "../data/infoitems";
import InfoItem from "./InfoItem";
import "./infosection.css";

const InfoSection = () => {
  return (
    <div className="info-section">
        <div className="is-heading">
          <span className="heading-gradient absolute-center"> Create and Proof of Authority Your Data by NFT </span>
        </div>
        <div className="is-item-container">
          {INFO_ITEMS.map((_infoItem)=>(
          <InfoItem item={_infoItem} />
          ))}
          
        </div>
    </div>
  )
}

export default InfoSection