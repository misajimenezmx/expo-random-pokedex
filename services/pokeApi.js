import axios from 'axios'

export default class PokeApi {
    static getRandomPokemons = async () => {
        const data = await this.get('https://pokeapi.co/api/v2/pokemon', { 
                limit: 10,
                offset: Math.ceil(Math.random() * 1000)
        });
        return Promise.all(data.results.map((pokemon) => this.getFullPokemonData(pokemon)))
    }
    static getFullPokemonData = async (poke) => {
        const pokemon = await this.get(poke.url)
        const abilities = await Promise.all(pokemon.abilities.map(({ability: { url }}) => this.get(url)))
        const types = await Promise.all(pokemon.types.map(({type: { url }}) => this.get(url)))
        const species = await this.get(pokemon.species.url)
        const { chain: { evolves_to } } = await this.get(species.evolution_chain.url)
        const evolution = evolves_to.length
            && evolves_to[0].species.name !== pokemon.species.name
            ? evolves_to[0].species.name : null

        return {
            name: pokemon.species.name,
            imageUrl: pokemon.sprites.front_default,
            abilities: abilities.map(({names}) => names.find(({language: {name}}) =>  name === 'es').name),
            types: types.map(({names}) => names.find(({language: {name}}) =>  name === 'es').name),
            evolution
        }
    }
    static get =  async (url, params) => {
        try {
            const response =  await axios.get(url, {
                params
            });
            return response.data
        } catch (error) {
            Promise.resolve(null);
        }
    }
};
