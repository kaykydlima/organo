import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const placeholderModificado = `${props.placeholder}` //para interpolar um texto e uma variavel dentro de algum atributo.
    
    

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value);
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder= {placeholderModificado} />
        </div>
    );
}

export default CampoTexto;