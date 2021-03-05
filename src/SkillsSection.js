import React from 'react'

const SkillsSection = ({ skills }) => {

    return (
        <div>
                {skills.join(', ')}
        </div>
    )
}

export default SkillsSection
