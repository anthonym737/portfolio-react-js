import React from 'react'
import TypeWriter from 'typewriter-effect'
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.linkedin.com/in/anthony-morand-b616a3172/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-twitter-square'></i>
                        </a>
                    </div>
                </div>
            
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Bonjour, je m'appelle <span className='highlighted-text'>Anthony Morand</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <TypeWriter
                                options={{
                                    strings: ['JS','C#','PHP','MySQL'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50
                                }} 
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            A la recherche d'un poste de développeur informatique
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {" "}
                        Embauchez-moi{" "}
                    </button>
                    <a href='cv.pdf'>
                        <button className='btn highlighted-btn'>Mon CV</button>
                    </a>
                </div>
                
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'> 
                
                </div>
            </div>     
        </div>
    </div>
  )
}