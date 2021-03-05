import React from 'react'





const ExperienceSection = ({ experience }) => {
    const responsilities = experience.responsibilities
    console.log(responsilities);
    return (
        <div>
            <div className='experience-header'>
                <div className='experience-left'>
                    {experience.company} | {experience.location}
                </div>
                <div className='experience-right'>
                    {experience.title} | {experience.dates}
                </div>
            </div><br></br>
            
            <ul>
                {responsilities.map(resp => (
                    <li>{resp}</li>))}
            </ul>
        </div>
    )
}

export default ExperienceSection
