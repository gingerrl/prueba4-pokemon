import React from 'react'
import usePokemon from '../../hooks/usePokemon';
import "../SearchPokemon/SearchPokemon.css"
function SearchPokemon() {
  const { search, setSearch } = usePokemon();

  const handleSearch = (e) => {
    setSearch(e)
  }
  return (
    <div>
      <input onChange={(e) => handleSearch(e.target.value)} className='icon' placeholder='Buscar' />
    </div>
  );
}

export default SearchPokemon