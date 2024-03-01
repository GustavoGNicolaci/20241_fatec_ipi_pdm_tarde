import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Pedido from './Pedido';

const App = () => {
    return (
        <div className="container border rounded mt-2">

            <div className="row">
                <div className="col-12">
                    <h1 className="display-5 text-center">Seus pedidos</h1>
                </div>
            </div>

            <div className="row">

                <div className="col-sm-12 col-lg-4">
                    <Pedido
                        data="12/03/2024"
                        icone="fa-solid fa-hdd fa-2x"
                        titulo="SSD"
                        descricao="SSD A400 1TB" />
                </div>

                <div className="col-sm-12 col-lg-4">
                    <Pedido
                        data="13/02/2024"
                        icone="fa-solid fa-book fa-2x"
                        titulo="Livro"
                        descricao="Concrete Mathematics" />
                </div>

                <div className="col-sm-12 col-lg-4">
                    <Pedido
                        data="21/01/2023"
                        icone="fa-solid fa-laptop fa-2x"
                        titulo="Notebook"
                        descricao="Notebook 8Gb i7" />
                </div>

            </div>

        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);