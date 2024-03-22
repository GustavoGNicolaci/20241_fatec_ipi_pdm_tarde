import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom'
import React from 'react'
import EstacaoClimatica from './EstacaoClimatica'

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
        if (data >= d1 && data < d2) {
            return estouNoSul ? 'Inverno' : 'Verão'
        }
        if (data >= d2 && data < d3) {
            return estouNoSul ? 'Primavera' : 'Outono'
        }
        if (data >= d3 || data < d4) {
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
        'Outono': 'fa-leaf',
        'Inverno': 'fa-snowflake'
    }

    render() {
        console.log('Render')
        //console.log(this.state)
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        {
                            this.state.mensagemDeErro ?
                            <p className='border rounded p-2 fs-1 text-center'>
                                É preciso dar acesso. Por favor, refaça o procedimento.
                            </p> :
                            <EstacaoClimatica
                                latitude={this.state.latitude}
                                longitude={this.state.longitude}
                                estacao={this.state.estacao}
                                data={this.state.data}
                                icone={this.state.icone}
                                mensagemDeErro={this.state.mensagemDeErro}
                                obterLocalizacao={this.obterLocalizacao}
                            />
                        }
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