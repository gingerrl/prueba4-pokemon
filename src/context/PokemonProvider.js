import React, { useEffect, useState } from 'react';
import ServicePokemon from "../api/Api"
const PokemonContext = React.createContext()

function PokemonProvider({ children }) {
    const [oculto, setOculto] = useState(true)
    const [pokemonList, setPokemonList] = useState([])
    const [searchPokemons, setSearchPokemons] = useState([]);
    const [search, setSearch] = useState("")

    console.log("listado",pokemonList)
    // useEffect(() => {
    //     setSearchPokemons(pokemonList.filter(x => x.name.toUpperCase().includes(search.toUpperCase())))
    // }, [search])

        useEffect(() => {
           setSearchPokemons([...pokemonList])
        }, [pokemonList])

    useEffect(() => {
        async function fetchPokemons() {
            const result = await ServicePokemon.getPokemon()
            setPokemonList(result.results)
        }
        fetchPokemons()
    }, [])

    return (
        <PokemonContext.Provider value={{
            pokemonList,
            setPokemonList,
            oculto,
            setOculto,
            searchPokemons,
            search,
            setSearch


        }}
        >
            {children}</PokemonContext.Provider>
    )
}

export { PokemonProvider };
export default PokemonContext;