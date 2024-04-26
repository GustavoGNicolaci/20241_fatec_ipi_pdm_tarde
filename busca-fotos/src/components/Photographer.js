import React from 'react'

const Photographer = ({ photographer, photographer_url }) => {
    return (
        <div>
            <a href={photographer_url}>{photographer}</a>
        </div>
    )
}

export default Photographer