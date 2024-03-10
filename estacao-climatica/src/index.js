import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom'
import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            estacao: null,
            data: null,
            icone: null
        }
    }

    obterEstacao = (latitude, longitude) => {
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

    icones = {
        'Primavera': 'fa-seedling',
        'Verão': 'fa-sun',
        'Outono': 'fa-canadian-maple-leaf',
        'Inverno': 'fa-snowflake'
    }

    render() {
        return (
            <div>Meu app</div>
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
    document.getSelector('#root')
)