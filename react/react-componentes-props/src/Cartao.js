const Cartao = props => (
    <div className="card">
        {/* cabeçalho do cartão */}
        <div className="card-header text-muted">
            {props.cabecalho}
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>
)

export default Cartao;