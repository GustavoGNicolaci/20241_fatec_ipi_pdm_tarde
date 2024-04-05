import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'

export default class App extends React.Component {
    onBuscaRealizada = (termoDaBusca) => {
        console.log(termoDaBusca)
    }

    render() {
        console.log(env.PEXELS_KEY)
        console.log(window.env.PEXELS_KEY)
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
            </div>
        )
    }
}
