import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'
import cv from '../../../public/amo_cv.pdf';



export default function AboutMe(props) {
  let fadeInScreenHandler = (screen)=>{
    if(screen.fadeInScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = 
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
      description: "Ayant obtenu mon SIO Options SLAM au Campus de la Chataigneraie, je suis un développeur spécialisé dans le framework React. Je suis à le recherche d'un poste de développeur informatique",
      hightlights:{
        bullets:[
          "Développement Front et Back",
          "Front End Interactif",
          "Base de données",
          "API"
        ],
        heading:"Points forts:"
      }
    }
    const renderHightlights = () =>{
      return(
        SCREEN_CONSTANTS.hightlights.bullets.map((value, i)=>(
          <div className='hightlight' key={i}>
            <div className='hightlight-blob'></div>
            <span>{value}</span>
            
          </div>
        ))
      )
    }
  return (
    <div className='about-me-container screen-container fade-in' id={props.id || ""}>
      <div className='about-me-parent'>
        <ScreenHeading 
          title={'A propos de moi'}
          subHeading={'Pourquoi me choisir ?'} 
        />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
            <div className='about-me-hightlights'>
              <div className='hightlight-heading'>
                <span>{SCREEN_CONSTANTS.hightlights.heading}</span>
              </div>
              {renderHightlights()}
            </div>
            <div className='about-me-options'>
              <button 
                className='btn primary-btn'
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Embauchez-moi
                </button>
                <a href={cv} download='amo_cv.pdf'>
                  <button className='btn highlighted-btn'>Mon CV</button>
                </a>
            </div>
          </div>
        </div>
        <div className='about-me-card-2'>
          <div className='about-me-diplome'></div>
        </div>
      </div>
    </div>
  )
}
