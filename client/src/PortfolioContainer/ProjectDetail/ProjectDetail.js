import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProjectDetail() {
    const [projectDetails, setProjectDetails] = useState(null);
    const { id } = useParams();
    console.log("Project ID: ", id);

    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProjectDetails()  {
            try {
                
                const response = await axios.get(`http://localhost:5000/api/projects/${id}`);
                console.log("Received project data:", response.data);
                setProjectDetails(response.data);
            } catch (error) {
                console.error("Error retrieving project details", error);
                setError(error);
            }
        };
        if(id) {
            fetchProjectDetails();
        }
    }, [id])

    if (error) {
        return <div>Erreur de chargement des détails du projet: {error.message}</div>;
      }
      
    if (!projectDetails) {
        return <div>Chargement ...</div>
    }

    // Ajoute cette vérification supplémentaire
    if (!projectDetails.pf_title) {
        return <div>Le projet n'a pas de titre.</div>;
    }

    return (
        <div className='project-detail-container'>
            <h1>{projectDetails ? projectDetails.pf_title : "Chargement du titre"}</h1>
        </div>
  )
}
