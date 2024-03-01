const Feedback = ({ funcaoOk, textoOk, funcaoNOk, textoNOk }) => (
    <div className="d-flex justify-content-evenly m-2">

        <button type="button" className="btn btn-primary" onCkick={funcaoOk}>
            {textoOk}
        </button>

        <button type="button" className="btn btn-danger" onCkick={funcaoNOk}>
            {textoNOk}
        </button>

    </div>
)

export default Feedback;