import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom'
import React from 'react'

class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         latitude: null,
    //         longitude: null,
    //         estacao: null,
    //         data: null,
    //         icone: null,
    //         mensagemDeErro: null
    //     }
    //     console.log('Construtor')
    // }

    state = {
        latitude: null,
        longitude: null,
        estacao: null,
        data: null,
        icone: null,
        mensagemDeErro: null
    }

    componentDidMount() {
        this.obterLocalizacao()
    }

    componentDidUpdate() {
        console.log('Componente atualizado')
    }

    componentWillUnmount() {
        console.log('Componente desmontado')
    }

    obterEstacao = (data, latitude) => {
        const anoAtual = data.getFullYear()
        //21/6
        const d1 = new Date(anoAtual, 5, 21)
        //24/9
        const d2 = new Date(anoAtual, 8, 24)
        //22/12
        const d3 = new Date(anoAtual, 11, 22)
        //21/3
        const d4 = new Date(anoAtual, 2, 21)
        const estouNoSul = latitude < 0
        if(data >= d1 && data < d2) {
            return estouNoSul ? 'Inverno' : 'Verão'
        }
        if(data >= d2 && data < d3) {
            return estouNoSul ? 'Primavera' : 'Outono'
        }
        if(data >= d3 || data < d4) {
            return estouNoSul ? 'Verão' : 'Inverno'
        }
        return estouNoSul ? 'Outono' : 'Primavera'
    }

    obterLocalizacao = () => {
        //usando a api de geolocalizacao, extrair a localizacao do usuario
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //quando estiver disponivel:
                //extrair a data atual do sistema
                let dataAtual = new Date()
                //encontrar a estacao climatica usando a data e o local
                let estacao = this.obterEstacao(dataAtual, position.coords.latitude)
                //acessar o mapa de icones e pegar aquele que esta associado a estacao detectada
                let icone = this.icones[estacao]
                //atualizar o estado    
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    estacao: estacao,
                    data: dataAtual.toLocaleTimeString(),
                    icone: icone
                })
            },
            (erro) => {
                //quando houver erro:
                console.log(erro)
                this.setState({
                    mensagemDeErro: 'Por favor, permita o acesso a sua localização.'
                })

            }
        )
    }

    icones = {
        'Primavera': 'fa-seedling',
        'Verão': 'fa-sun',
        'Outono': 'fa-canadian-maple-leaf',
        'Inverno': 'fa-snowflake'
    }

    render() {
        console.log('Render')
        //console.log(this.state)
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="card">
                            {/* corpo */}
                            <div className="card-body">
                                <div style={{height: '6rem'}} className="ps-2 d-flex align-items-center border rounded mb-2">
                                    <i className={`fa-solid fa-5x ${this.state.icone}`}></i>
                                    <p className="w-75 ms-3 text-center fs-1">{this.state.estacao}</p>
                                </div>
                                <div>
                                    <p className="text-center mt-3">
                                        {
                                            this.state.latitude
                                            ? `Coords: ${this.state.latitude}, ${this.state.longitude}. Data: ${this.state.data}`
                                            : this.state.mensagemDeErro ? `${this.state.mensagemDeErro}` 
                                            : 'Clique no botão para saber sua estação climática.'
                                        }
                                    </p>
                                </div>
                                <div>
                                    <button className='btn btn-outline-primary w-100 mt-2' onClick={this.obterLocalizacao} disabled={this.state.erro}>
                                        Qual a minha estação?
                                    </button>
                                    <button className="btn btn-outline-danger w-100 mt-2" 
                                    onClick={() => ReactDOM.unmountComponentAtNode(document.querySelector('#root'))}>
                                        Remover App
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// export default function App() {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position)
//     )
//     return (
//         <div>
//             Meu app
//         </div>
//     )
// }

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);