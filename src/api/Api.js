import { urlBase } from './UrlBase'
import {http} from "../api/HttpService"

const getPokemon =async () => {
    try{
      const resp= await http.get(`${urlBase.POKEMON_LIST}pokemon`)
      return resp.data
    } catch(error){
        return undefined
    }
}

const ServicePokemon={
    getPokemon
}

export default ServicePokemon;