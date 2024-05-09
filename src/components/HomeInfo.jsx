import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({ text,link,btnText }) => (

    <div className="info-box" >
        <p className="font-medium sm:text-xl text-center" >{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn" >
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    3: (
        <InfoBox 

         text="Some impactful and inspiring projects are here"
         link="/projects"
         btnText="View projects"
        />
    ),
    2: (

        <InfoBox 

        text="The skills I possess and the roles I desire"
        link="/about"
        btnText="Who am I ?"
       />
        
    ),
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5" >
        Hi, I am <span className="font-semibold">Ankit</span>👋 
        <br/>
        An aspiring Software Engineer 
    </h1>
    ),
    4: (
        
        <InfoBox 

        text="Have required opportunities, please contact , I am just few clicks away"
        link="/contact"
        btnText="Let's Talk"
       />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo