import React, { useEffect, useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Projects.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Projects(props) {
    const [projects, setProjects] = useState([]);

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id);
     }
     const fadeInSubscription = 
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/projects')
            .then(response => {
                console.log("Project data:", response.data);
                setProjects(response.data);
            })
            .catch(error => {
                console.error("There is a problem with axios request", error)
            });
    }, []) 
    console.log("Projects array", projects);
    return (
        <div className='projects-container fade-in' id={props.id || ""}>
            <ScreenHeading 
                title={"Mes projets"}
                subHeading={"Voici mes réalisations"}
            />
            <div className='project-grid'>
                {projects.map(project => (
                    <Link to={`/projects/${project.pf_id}`} key={project.pf_id} className='project-item'>
                        <img src={`/images/Projects/${project.folder_name}/${project.pf_image_url}`}/>
                        <div className='project-title'>{project.pf_title}</div>
                    </Link>
                ))} 
            </div>
            
        </div>
    )
}

