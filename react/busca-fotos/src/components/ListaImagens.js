import React from "react";
import Imagem from "./Imagem";
import Photographer from "./Photographer";

const ListaImagens = ({ photos, imgStyle }) => {
    return (
        photos.map((photo) => (
            <div className="grid">
                <Imagem
                    imgStyle={imgStyle}
                    src={photo.src.small}
                    id={photo.id}
                    alt={photo.alt} />
                <Photographer 
                    photographer={photo.photographer}
                    photographer_url={photo.photographer_url}
                />
            </div>
        ))
    )
}
export default ListaImagens;