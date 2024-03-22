//rce
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class EstacaoClimatica extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        console.log('Componente montado')
        this.timer = setInterval(() => {
            //extrair a data atual do sistema e atualizar o estado
            this.setState({ data: new Date().toLocaleTimeString() })
        }, 1000)
    }

    componentWillUnmount() {   
        console.log('Componente desmontado')
        clearInterval(this.timer)
    }

    componentDidUpdate() {
        console.log('Componente atualizado')
    }

    constructor(props) {
        super(props)
    }
    render() {
        console.log('Render')
        return (
            <div className="card">
                {/* corpo */}
                <div className="card-body">
                    <div style={{ height: '6rem' }} className="ps-2 d-flex align-items-center border rounded mb-2">
                        <i className={`fa-solid fa-5x ${this.props.icone}`}></i>
                        <p className="w-75 ms-3 text-center fs-1">{this.props.estacao}</p>
                    </div>
                    <div>
                        <p className="text-center mt-3">
                            {
                                this.props.latitude
                                    ? `Coords: ${this.props.latitude}, ${this.props.longitude}. Data: ${this.state.data}`
                                    : this.props.mensagemDeErro ? `${this.props.mensagemDeErro}`
                                        : 'Clique no botão para saber sua estação climática.'
                            }
                        </p>
                    </div>
                    <div>
                        <button className='btn btn-outline-primary w-100 mt-2' onClick={this.props.obterLocalizacao} disabled={this.props.erro}>
                            Qual a minha estação?
                        </button>
                        <button className="btn btn-outline-danger w-100 mt-2"
                            onClick={() => ReactDOM.unmountComponentAtNode(document.querySelector('#root'))}>
                            Remover App
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EstacaoClimatica