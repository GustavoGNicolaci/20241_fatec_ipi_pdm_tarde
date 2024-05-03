import React from 'react'

const Imagem = ({ src, alt, id, imgStyle }) => {
    return (
        <div
            key={id}
            className={`${imgStyle} flex justify-content-center`}>
            <img className='border-round' src={src} alt={alt} width={100} />
        </div>
    )
}

export default Imagem