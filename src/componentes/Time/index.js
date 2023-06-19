import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    const css = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.25) }

    return (
        colaboradores.length > 0 && <section className='time' style={css}>
            <input 
                value={time.cor} 
                type="color" 
                className='input-cor' 
                onChange={event => mudarCor(event.target.value, time.nome)}    
            />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, i) => {
                    return <Colaborador
                        key={i}
                        colaborador={colaborador}
                        corDeFundo={time.cor}
                        aoDeletar={aoDeletar}
                    />
                })}
            </div>
        </section>
    )
}

export default Time