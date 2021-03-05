import React from 'react'





const ExperienceSection = ({ experience }) => {
    const responsilities = experience.responsibilities
    console.log(responsilities);
    return (
        <div>
            <div className='experience-header'>
                <p>{experience.company} | {experience.location}</p></div>
            <p>{experience.title} | {experience.dates}</p>
            <ul>
            {responsilities.map(resp => (
                <li>{resp}</li> ))}
            </ul>
        </div>
    )
}

export default ExperienceSection
