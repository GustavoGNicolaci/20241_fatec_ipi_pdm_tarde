const Pedido = (props) => {
    return (
        <div className="card mb-2">
            <div className="card-header text-muted">
                {props.data}
            </div>
            <div className="card-body d-flex">
                <div className='d-flex align-items-center'>
                    <i className={props.icone}></i>
                </div>
                <div className='flex-grow-1 ms-2 border p-2'>
                    <h4 className="text-center">{props.titulo}</h4>
                    <p className='text-center'>props.descricao</p>
                </div>
            </div>
        </div>
    )
}

export default Pedido;