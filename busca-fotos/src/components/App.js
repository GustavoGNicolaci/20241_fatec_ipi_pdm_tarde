import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
import { createClient } from 'pexels'
import ListaImagens from './ListaImagens'

export default class App extends React.Component {

    state = {
        photos: []
    }

    pexelsClient = null
    onBuscaRealizada = (termo) => {
        this.pexelsClient.photos.search({ query: termo, per_page: 2 }).then((results) => {
            // console.log(photos)
            this.setState({ photos: results.photos })
            console.log(results.photos)
        })
    }

    componentDidMount() {
        this.pexelsClient = createClient(env.PEXELS_KEY)
    }

    render() {
        return (
            <div className="grid border-round border-1 border-400 justify-content-center w-9 m-auto">
                <div className="col-12">
                    <h1>Exibir uma lista de...</h1>
                </div>
                <div className="col-8">
                    <Busca
                        onBuscaRealizada={this.onBuscaRealizada}
                    />
                </div>
                <div className="col-8">
                    {
                        <ListaImagens photos={this.state.photos} />
                    }
                </div>
            </div>
        )
    }
}
