import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="rodape">
            <img src="./imagens/fundo.png" alt="" />
            <div className="container">
                <div className="redes-sociais">
                    <img src="./imagens/fb.png" alt="" />
                    <img src="./imagens/tw.png" alt="" />
                    <img src="./imagens/ig.png" alt="" />
                </div>
                <img src="./imagens/logo.png" alt="" className="logo" />
                <span>Desenvolvido por Alura</span>
            </div>
        </footer>
    )
}

export default Rodape