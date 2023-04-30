import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div class="navbar">
    <div class="navbar__container">
      <a href="#home" id="navbar__logo">NFT EDUVERSE</a>
      <div class="navbar__toggle" id="mobile-menu">
        <span class="bar"></span> <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="navbar__menu">
        <li class="navbar__item">
          <a href="\components\TopFold" class="navbar__links" id="home-page">Home</a>
        </li>
        <li class="navbar__item">
          <a href="#about" class="navbar__links" id="about-page">Services</a>
        </li>
        <li class="navbar__item">
          <a href="#services" class="navbar__links" id="services-page"
            >Mint NFT</a
          >
        </li>
        <li class="navbar__item">
          <a href="#services" class="navbar__links" id="services-page"
            >Supported</a
          >
        </li>
        <li class="navbar__item">
          <a href="#services" class="navbar__links" id="services-page"
            >Login</a
          >
        </li>
        <li class="navbar__btn">
          <a href="#sign-up" class="button" id="signup">SIGN UP</a>
        </li>
        
      </ul>
    </div>
  </div>
        


  )
}

export default Navbar;