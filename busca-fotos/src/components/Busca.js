import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class Busca extends Component {
    state = {
        termoDaBusca: ''
    }

    onTermoAlterado = (event) => {
        console.log(event.target.value)
        this.setState({ termoDaBusca: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDaBusca)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column'>
                    <span className="p-input-icon-left w-full">
                        <i className="pi pi-search" />
                        <InputText
                            value={this.state.termoDaBusca}
                            className="w-full"
                            onChange={this.onTermoAlterado}
                            placeholder={this.props.dica}
                        />
                    </span>
                    <Button
                        label="Buscar"
                        className="p-button-outlined mt-2"
                    />
                </div>
            </form>
        )
    }
}

Busca.defaultProps = {
    dica: 'Digite algo que deseja ver...'
}
