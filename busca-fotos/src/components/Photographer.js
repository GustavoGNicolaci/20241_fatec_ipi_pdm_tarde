import React from 'react'

const Photographer = ({ photographer, photographer_url }) => {
    return (
        <div className='col-12 lg:col-6 xl:col-4'>
            <a href={photographer_url}>{photographer}</a>
        </div>
    )
}

export default Photographer