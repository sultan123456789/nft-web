import React from "react";
import "./App.css";
import Header from "./components/Header";
import TopFold from "./components/TopFold";
import Brandsintegration from "./components/Brandsintegration";
import Footer from "./components/Footer";
import InfoSection from "./components/InfoSection/index"
import TrendingNFT from "./components/TrendingNFT";
import Particles from "./components/Particle";


const App = () => {
  return (
    
    <div className="max-width">

    <Header />
    <TopFold />
    
    <TrendingNFT />
    <InfoSection />
  
    <Particles />
    <Brandsintegration />
    <Footer />
    </div>
  )
};

export default App