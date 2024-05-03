import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numeros: []
        }
    }

    sortearNumeros = () => {
        let numerosSorteados = [];
        while (numerosSorteados.length < 6) {
            let numero = Math.floor(Math.random() * 90) + 1;
            numerosSorteados.push(numero);
        }
        this.setState({ numeros: numerosSorteados });
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className="row justify-content-center">
                    <div className='card'>

                        <div className="card-header">
                            <p className="text-left m-2">Mega Sena</p>
                        </div>

                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="text-center">
                                            {this.state.numeros.join(' | ')}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <Button className="btn btn-success w-100 mt-2" onClick={this.sortearNumeros}>
                                Sortear Números
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);