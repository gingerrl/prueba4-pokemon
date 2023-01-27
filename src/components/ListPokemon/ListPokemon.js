import React from 'react'
import "../ListPokemon/ListPokemon.css";
import ServicePokemon from '../../api/Api';
import usePokemon from '../../hooks/usePokemon';
import * as helper from "../../helper/global"
function ListPokemon ()  {

  const { searchPokemons,setPokemonList}= usePokemon()
  console.log("searchhhh",searchPokemons)
  return (
    <div className='listContainer'>
        <table className='tableList'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Ataque</th>
                    <th>Defensa</th>
                    <th>Acciones</th>

                </tr>
            </thead>
            <tbody>
              {searchPokemons.map((list, index) =>(
                   <tr key={index}>
                   <td>{list.name}</td>
                   <td> <img alt="pokemon" width="40px" height="40px" src={ list?.url} /></td>
                   <td>{list.attack}</td>
                   <td>{list.defense}</td>
                   <td></td>
   
                 </tr>
              ))}
           
            </tbody>
        </table>

    </div>

  )
}


export default ListPokemon;