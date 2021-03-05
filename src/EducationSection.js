import React from 'react'

const EducationSection = ({ education }) => {
    const awards = education.awards
    console.log(awards);
    return (
        <div>
            <div className='education-header'>
                <p>{education.school} | {education.degree}</p>
            </div>
            <ul>
                {awards.map(award => (
                    <li>{award}</li>))}
            </ul>
        </div>
    )
}

export default EducationSection
