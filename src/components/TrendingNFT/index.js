import React from 'react'
import "./trendingnft.css"
import Slider from "react-slick/lib/slider";
import { TRENDING_NFTS } from '../data/trendingNFTs';
import TrendingCard from './TrendingCard';
import Button from "../../common/Button"

const settings = {
  slidesToShow:3 ,
  slidesToScroll:1,
  autoplay:true,
  speed:200,
  arrows:false,
};

const TrendingNFT = () => {
  return (
    <div className="trending-nfts">
      <div className="title absolute-center"> <span className="heading-gradient" >Our Services</span>
      </div>
      <div className="tf-r-bg-blob"></div> 
      <Slider {...settings}>
          {TRENDING_NFTS.map((_nft)=>(
            <TrendingCard nft={_nft} />
          ))}
      </Slider>
      <div className='tn-btn absolute-center'>
        <Button btnText="SEE MORE" type = "Secondary" customClass="seemore-btn" />
      </div>
    </div>
    
  )
}

export default TrendingNFT