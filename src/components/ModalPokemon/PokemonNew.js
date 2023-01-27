import React from 'react'
import usePokemon from '../../hooks/usePokemon';
import "../ModalPokemon/PokemonNew.css"
function PokemonNew() {
    const { setOculto } = usePokemon();

    const handleCancel = () => {
        setOculto(true)
    }
    return (
        <div className='blockPokemon' >
            <div className='blockElement1Pokemon'>
                <div>
                    <span>Nuevo Pokemon</span>
                </div>
                {/* <div >
                    <span>Actualizar Pokemon</span>
                </div> */}
            </div>
            <div className='blockElement2'>
                <div className='namePokemon' >
                    Nombre: <input />
                </div>
                <div>
                    Ataque: 0<input className="styled-slider slider-progress" type="range" min="0" max="100" />100

                </div>
            </div>

            <div className='blockElement3'>
                <div>
                    Imagen: <input type="url" placeholder='url' />
                </div>
                <div className='rangeInput'>
                    Defensa: 0<input type="range" min="0" max="100" />100
                </div>
            </div>
            <div className='blockElement4Pokemon'>
                {/* <div >
                    <button  > Guardar</button>
                </div> */}
                <div >
                    <button className='primaryButton' > Actualizar</button>
                </div>
                <button className='primaryButton' onClick={() => handleCancel()} > Cancelar</button>

            </div>
        </div>
    )

}

export default PokemonNew;