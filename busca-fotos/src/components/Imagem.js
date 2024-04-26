import React from 'react'

const Imagem = ({src, alt, id}) => {
  return (
    <div key={id}>
        <img src={src} alt={alt} />
    </div>
  )
}

export default Imagem