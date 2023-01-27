import React from 'react'
import ListPokemon from '../../components/ListPokemon/ListPokemon';
import PokemonNew from '../../components/ModalPokemon/PokemonNew';
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon';
import usePokemon from '../../hooks/usePokemon';
import "../ScreenPage/ScreenPage.css";
import icon from "../../assets/plus.svg";
function ScreenPage() {
  const { oculto, setOculto } = usePokemon()

  const handleButton = async () => {
    setOculto(false);

  }
  return (
    <div className='container'>
      <div className='title'>
        <span>Listado de Pokemon</span>
      </div>
      <div className='itemSearch'>
        <SearchPokemon />
        <button className='primaryButton' onClick={() => handleButton()}>
          <img src={icon} aria-hidden="true" /> Nuevo
        </button>
      </div>
      <div className='itemList'>
        <ListPokemon />
      </div>
      <div className='itemPokemon'>
        {!oculto && <PokemonNew />}
      </div>
    </div>
  )
}

export default ScreenPage;