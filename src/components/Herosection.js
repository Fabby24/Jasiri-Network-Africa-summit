import React from "react";
import "../styles/Herosection.css";
import HeroImg from "../components/images/hero.webp";

const Herosection = () => {
    return (
        <div className="hero-container">
            <div className="overlay">
                <div className="content">
                <h1>JASIRI NETWORK</h1>
                <h2>AFRICA SUMMIT 2025</h2>
                <p>December 11, 2025</p>
                <div className="buttons">
                    <button className="btn-1">BOOK YOUR SPOT</button>
                    <button className="btn-2">PARTER WITH US</button>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Herosection;