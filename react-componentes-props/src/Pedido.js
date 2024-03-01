const Pedido = ({icone, titulo, descricao}) => {
    //const {icone, titulo, descricao} = props
    return (
            <div className="d-flex">
                <div className='d-flex align-items-center'>
                    <i className={icone}></i>
                </div>
                <div className='flex-grow-1 ms-2 border p-2'>
                    <h4 className="text-center">{titulo}</h4>
                    <p className='text-center'>{descricao}</p>
                </div>
            </div>
    )
}

export default Pedido;