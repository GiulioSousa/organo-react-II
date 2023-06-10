import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ time, colaboradores }) => {
    const css = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }

    return (
        colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador,i) => 
                    <Colaborador 
                        key={i} 
                        colaborador={colaborador}
                        corDeFundo={time.corSecundaria} 
                    /> )}
            </div>
        </section> 
    )
}

export default Time