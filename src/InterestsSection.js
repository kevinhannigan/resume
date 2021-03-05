import React from 'react'

const InterestsSection = ({ interests }) => {

    return (
        <div>
                {interests.join(', ')}
        </div>
    )
}

export default InterestsSection