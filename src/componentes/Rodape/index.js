import "./Rodape.css"

const Rodape = (props) => {
    return(
        <footer className="rodape-sociais">
            <div className="redes-sociais">
                <img src="/imagens/fb.png" alt="Ir para Facebook" />
                <img src="/imagens/tw.png" alt="Ir para Twitter" />
                <img src="/imagens/ig.png" alt="Ir para instagram" />
            </div>
            <img src="/imagens/logo.png" alt="Logo Organo" />
            <p>Desenvolvido por Kayky.</p>
        </footer>
    );
}

export default Rodape;