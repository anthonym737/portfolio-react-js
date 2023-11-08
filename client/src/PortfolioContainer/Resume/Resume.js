import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

// const Resume = (props) => {
//   /* STATES */
//   const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
//   const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

//   let fadeInScreenHandler = (screen) => {
//     if (screen.fadeInScreen !== props.id) return;

//     Animations.animations.fadeInScreen(props.id);
//   };
//   const fadeInSubscription =
//     ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

//   /* REUSABLE MINOR COMPONENTS */
//   const ResumeHeading = (props) => {
//     return (
//       <div className="resume-heading">
//         <div className="resume-main-heading">
//           <div className="heading-bullet"></div>
//           <span>{props.heading ? props.heading : ""}</span>
//           {props.fromDate && props.toDate ? (
//             <div className="heading-date">
//               {props.fromDate + "-" + props.toDate}
//             </div>
//           ) : (
//             <div></div>
//           )}
//         </div>
//         <div className="resume-sub-heading">
//           <span>{props.subHeading ? props.subHeading : ""}</span>
//         </div>
//         <div className="resume-heading-description">
//           <span>{props.description ? props.description : ""}</span>
//         </div>
//       </div>
//     );
//   };

//   /* STATIC RESUME DATA FOR THE LABELS*/
//   const resumeBullets = [
//     { label: "Formations", logoSrc: "education.svg" },
//     { label: "Expériences professionnelles", logoSrc: "work-history.svg" },
//     { label: "Compétences", logoSrc: "programming-skills.svg" },
//     { label: "Projets", logoSrc: "projects.svg" },
//     { label: "Centres d'intérêt", logoSrc: "interests.svg" },
//   ];

//   //here we have
//   const programmingSkillsDetails = [
//     { skill: "JavaScript", ratingPercentage: 80 },
//     { skill: "React", ratingPercentage: 70 },
//     { skill: ".NET", ratingPercentage: 70 },
//     { skill: "Symfony", ratingPercentage: 75 },
//     { skill: "SQL", ratingPercentage: 70 },
//     { skill: "HTML", ratingPercentage: 80 },
//     { skill: "CSS", ratingPercentage: 80 },
//   ];

//   const projectsDetails = [
//     {
//       title: "Portfolio en ligne",
//       duration: { fromDate: "OCT.2023", toDate: "NOV.2023" },
//       description:
//         "Un portfolio en ligne présentant mon profil en détail",
//       subHeading: "Technologies utilisées: React JS, Bootsrap",
//     },
//     {
//       title: "BadgeMaster",
//       duration: { fromDate: "MAR.2023", toDate: "MAI.2023" },
//       description:
//         "Une basée sur la gestion des accès des personnes",
//       subHeading:
//         "Technologies utilisées:  .NET, SQL Server",
//     },
//     {
//       title: "StageMaster",
//       duration: { fromDate: "MAR.2023", toDate: "MAI.2023" },
//       description:
//         "Une application web regroupant une liste d'entreprises en capacité d'accueillir différents profils d'étudiants",
//       subHeading:
//         "Technologies Used: Symfony, MySQL (ORM Doctrine)",
//     },
//   ];

//   const resumeDetails = [
//     <div className="resume-screen-container" key="education">
//       <ResumeHeading
//         heading={"Campus La Chataigneraie"}
//         subHeading={"BTS Services Informatiques aux Organisations Options SLAM"}
//         fromDate={"2021"}
//         toDate={"2023"}
//       />

//       <ResumeHeading
//         heading={"Normandie Web School"}
//         subHeading={"Bachelor Chef de Projet"}
//         fromDate={"SEP.2020"}
//         toDate={"FEV.2021"}
//       />
//       <ResumeHeading
//         heading={"Lycée André Maurois"}
//         subHeading={"BTS Comptabilité et Gestion"}
//         fromDate={"2015"}
//         toDate={"2018"}
//       />
//     </div>,

//     /* WORK EXPERIENCE */
//     <div className="resume-screen-container" key="work-experience">
//       <div className="experience-container">
//         <ResumeHeading
//           heading={"Docaposte Agility"}
//           subHeading={"Dévelopeur Front"}
//           fromDate={"JAN.2023"}
//           toDate={"FEV.2023"}
//         />
//         <div className="experience-description">
//           <span className="resume-description-text">
//             Réalisation d'un stage de la cadre de la formation au  BTS SIO
//           </span>
//         </div>
//         <div className="experience-description">
//           <span className="resume-description-text">
//             - Réalisation d'un CRUD utilisateur avec le framework React{" "}
//           </span>
//           <br />
//           <span className="resume-description-text">
//             - Participation à l'amélioration de l'application web de sondage Bonzaï
//           </span>
//         </div>
//       </div>
//     </div>,

//     /* PROGRAMMING SKILLS */
//     <div
//       className="resume-screen-container programming-skills-container"
//       key="programming-skills"
//     >
//       {programmingSkillsDetails.map((skill, index) => (
//         <div className="skill-parent" key={index}>
//           <div className="heading-bullet"></div>
//           <span>{skill.skill}</span>
//           <div className="skill-percentage">
//             <div
//               style={{ width: skill.ratingPercentage + "%" }}
//               className="active-percentage-bar"
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>,

//     /* PROJECTS */
//     <div className="resume-screen-container" key="projects">
//       {projectsDetails.map((projectsDetails, index) => (
//         <ResumeHeading
//           key={index}
//           heading={projectsDetails.title}
//           subHeading={projectsDetails.subHeading}
//           description={projectsDetails.description}
//           fromDate={projectsDetails.duration.fromDate}
//           toDate={projectsDetails.duration.toDate}
//         />
//       ))}
//     </div>,

//     /* Interests */
//     <div className="resume-screen-container" key="interests">
//       <ResumeHeading
//         heading="Jeux Vidéo"
//         description="J'aime jouer aux jeux-vidéo car ils permettent de favoriser l'esprit d'équipe"
//       />
//       <ResumeHeading
//         heading="Mangas"
//         description="Ces livres me permettent d'améliorer ma concentration de lecture"
//       />
//       <ResumeHeading
//         heading="Musique"
//         description="Elle me permet de me concentrer sur mes objectifs à atteindre"
//       />
//       <ResumeHeading
//         heading="Sport"
//         description="Le sport me permet d'avoir une activité physique important et de rester en bonne santé"
//       />
//     </div>,
//   ];

//   const handleCarousal = (index) => {
//     let offsetHeight = 360;

//     let newCarousalOffset = {
//       style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
//     };

//     setCarousalOffsetStyle(newCarousalOffset);
//     setSelectedBulletIndex(index);
//   };

//   const getBullets = () => {
//     return resumeBullets.map((bullet, index) => (
//       <div
//         onClick={() => handleCarousal(index)}
//         className={
//           index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
//         }
//         key={index}
//       >
//         <img
//           className="bullet-logo"
//           src={require(`../../assets/Resume/${bullet.logoSrc}`)}
//           alt="B"
//         />
//         <span className="bullet-label">{bullet.label}</span>
//       </div>
//     ));
//   };

//   const getResumeScreens = () => {
//     return (
//       <div
//         style={carousalOffsetStyle.style}
//         className="resume-details-carousal"
//       >
//         {resumeDetails.map((ResumeDetail) => ResumeDetail)}
//       </div>
//     );
//   };

// //   useEffect(() => {
// //     return () => {
// //       /* UNSUBSCRIBE THE SUBSCRIPTIONS */
// //       fadeInSubscription.unsubscribe();
// //     };
// //   }, [fadeInSubscription]);

//   return (
//     <div
//       className="resume-container screen-container fade-in"
//       id={props.id || ""}
//     >
//       <div className="resume-content">
//         <ScreenHeading title={"Mon CV"} subHeading={"Détails"} />
//         <div className="resume-card">
//           <div className="resume-bullets">
//             <div className="bullet-container">
//               <div className="bullet-icons"></div>
//               <div className="bullets">{getBullets()}</div>
//             </div>
//           </div>

//           <div className="resume-bullet-details">{getResumeScreens()}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resume;


export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id);
      }
      const fadeInSubscription = 
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return(
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    )   :   (
                        <div></div>
                    )}
                </div>   
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ""}</span>
                </div> 
            </div>
        )
        
    }

    const resumeBullets = [
        {label: "Formations", logoSrc: "education.svg"},
        {label: "Expérienes professionnelles", logoSrc: "work-history.svg"},
        {label: "Compétences", logoSrc: "programming-skills.svg"},
        {label: "Projets", logoSrc: "projects.svg"},
        {label: "Centres d'intérêt", logoSrc: "interests.svg"},
    ];

    const programmingSkillsDetails = [
        {skill: "Javacript", ratingPercentage: 80},
        {skill: "React", ratingPercentage: 70},
        {skill: "C#", ratingPercentage: 70},
        {skill: "PHP", ratingPercentage: 85},
        {skill: "SQL", ratingPercentage: 70},
        {skill: "HTML", ratingPercentage: 80},
        {skill: "CSS", ratingPercentage: 70},
    ]

    const projectsDetails = [
        {
            title: "Portfolio en ligne",
            duration: {fromDate: "SEP.2023", toDate: "NOV.2023"},
            description: "Un portfolio en ligne présentant mon profil en détail",
            subHeading: "Technologies utilisées: ReactJs, Bootstrap",
        },
        {
            title: "Projet BadgeMaster",
            duration: {fromDate: "MAR.2023", toDate: "MAI.2023"},
            description: "Une basée sur la gestion des accès des personnes",
            subHeading: "Technologies utilisées: .NET, SQL Server",
        },
        {
            title: "Projet StageMaster",
            duration: {fromDate: "MAR.2023", toDate: "MAI.2023"},
            description: "Une application web regroupant une liste d'entreprises en capacité d'accueillir différents profils d'étudiants",
            subHeading: "Technologies utilisées: Symfony, MySQL (ORM Doctrine)",
        },
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading 
                heading={"Campus La Chataigneraie"}
                subHeading={"BTS Services Informatiques aux Organisations Option SLAM"}
                fromDate={"2021"}
                toDate={"2023"}
            />
            <ResumeHeading 
                heading={"Normandie Web School"}
                subHeading={"Bachelor Chef de Projet"}
                fromDate={"SEP.2020"}
                toDate={"FEV.2021"}
            />
            <ResumeHeading 
                heading={"Lycée André Maurois"}
                subHeading={"BTS Comptabilité et Gestion"}
                fromDate={"2015"}
                toDate={"2018"}
            />
        </div>,

        /*Expériences professionnelles*/
        <div className='resume-screen-container' key="work-experience">
            <div className='experience-container'>
                <ResumeHeading 
                    heading={"Docaposte Agility"}
                    subHeading={"Développeur web"}
                    fromDate={"JAN.2023"}
                    toDate={"FEV.2023"}
                />
                <div className='experience-description'>
                    <span className='resume-description-text'>
                        Réalisation d'un stage de la cadre de la formation au  BTS SIO
                    </span>
                    <br/>
                    <span className='resume-description-text'>
                        - Réalisation d'un CRUD utilisateur avec le framework React{" "}
                    </span>
                    <br/>
                    <span className='resume-description-text'>
                        - Participation à l'amélioration de l'application web Bonzaï
                    </span>
                    <br/>
                </div>
            </div>
        </div>,
        
        /*compétences de programmation*/
        <div 
            className='resume-screen-container programming-skills-container' 
            key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index)=>(
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                        <div className='skill-percentage'>
                        <div 
                            style={{width: skill.ratingPercentage + "%"}} 
                            className='active-percentage-bar'
                        ></div>
                    </div>
                </div>
            ))}
        </div>,

        /*projets */
        <div className='resume-screen-container' key="projects">
            {projectsDetails.map((projectsDetails, index)=>(
                <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate} 
                    toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,

        /*centres d'intérêt */
        <div className='resume-screen-container' key='interests'>
            <ResumeHeading
                heading="Jeux Vidéo"
                description="Les jeux-vidéo dégagent différentes ambiances: calme, fun, tension. Il permettent également d'améliorer l'esprit d'équipe" 
            />
            <ResumeHeading
                heading="Mangas"
                description="Ils favorisent la lecture" 
            />
            <ResumeHeading
                heading="Musique"
                description="Elle me permet de me concentrer sur mes objectifs à atteindre" 
            />
            <ResumeHeading
                heading="Sport"
                description="Il me permet de faire des activités et d'être en bonne santé" 
            />
        </div>,   
    ];
     
    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"},
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index)=>(
            <div 
                onClick={()=>handleCarousal(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}
            >
                <img 
                    className='bullet-logo'
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    // alt="B"
                />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreens = () =>{
        return(
            <div
                style={carousalOffSetStyle.style}
                className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading 
                    title={'Mon CV'}
                    subHeading={'Détails'}
                />
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreens()}</div>
                </div>
            </div>    
        </div>
    )
}

// <ResumeHeading 
            //     heading={"Realtimes"}
            //     subHeading={"Développeur web"}
            //     fromDate={"30.MAI.2022"}
            //     toDate={"1.JUIL.2022"}
            // />
            // <div className='experience-description'>
            //     <span className='resume-description-text'>
            //         Réalisation d'un stage dans le cadre du BTS SIO : Application web Realtimes
            //     </span>
            // </div>
            // <ResumeHeading 
            //     heading={"E.Leclerc"}
            //     subHeading={"Caisse"}
            //     fromDate={"2021"}
            //     toDate={"2023"}
            // />
            // <div className='experience-description'>
            //     <span className='resume-description-text'>
            //         Encaissements, conseils clientèle
            //     </span>
            // </div>
            // <ResumeHeading 
            //     heading={"McDonald's"}
            //     subHeading={"Equipier polyvalent"}
            //     fromDate={"MAR.2021"}
            //     toDate={"AVR.2021"}
            // />
            // <div className='experience-description'>
            //     <span className='resume-description-text'>
            //         Préparation des commandes, encaissements
            //     </span>
            // </div>
            // </div>,