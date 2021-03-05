import React from 'react'

const ProjectsSection = ({ projects }) => {

    return (
        <div>
            <ul>
                {projects.map(proj => (
                <li>{proj}</li> ))}
            </ul>
        </div>
    )
}

export default ProjectsSection