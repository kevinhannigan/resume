import React from 'react'

const CertificationSection = ({ certifications }) => {

    return (
        <div>
                {certifications.join(', ')}
        </div>
    )
}

export default CertificationSection