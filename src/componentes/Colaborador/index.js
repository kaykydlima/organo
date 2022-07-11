import "./Colaborador.css"

const Colaborador = ({nome, imagem, cargo, background}) =>{
    return(
        <div className="colaborador">
            <div className="cabecalho" style={background}>
                <img src={imagem} alt={imagem} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador;