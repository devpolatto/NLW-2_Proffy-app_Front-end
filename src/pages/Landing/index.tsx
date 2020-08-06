import React from 'react';

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg"
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

const Landing: React.FC = () => {
  return(
    <div id="page-landing">
        <div id="page-landing-content" className="content">
            <div className="logo-container">
                <img src={logoImg} alt=""/>
                <h2>Sua plataforma de estudos online</h2>
            </div>

            <img src={landingImg} alt="" className="hero-image"/>

            <div className="buttons-container">
                <a href="/estudar" className="study"> 
                    Estudar<img src={studyIcon} alt="estudar"/>
                </a>
                <a href="/estudar" className="give-classes">
                    Dar aulas<img src={giveClassesIcon} alt="Dar aulas"/>
                </a>
            </div>

            <span className="total-connections">
                Total de 200 conexōes realizadas <img src={purpleHeartIcon} alt="coracao roxo"/>
            </span>

        </div>
    </div>
  )
}

export default Landing;