import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) =>{
    const corFundo = {
        backgroundColor: props.corSecundaria
    }; 

    const corBorda = {
        borderColor:props.corPrimaria,
    }
    
    const corFundoCard = {
        backgroundColor: props.corPrimaria
        
    }
    
    return(
            (props.colaboradores.length > 0) ? <section className="time" style={corFundo}> {/* renderização condicional */}
            <h3 style={corBorda}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} background={corFundoCard} key={colaborador.nome} />)}
            </div>
        </section>
        : ' '
    );
}

export default Time;