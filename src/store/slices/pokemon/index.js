import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemon: [],
        pokemonData: {},
        isLoading: false
    },
    reducers: {
        loadPokemon: (state, action) => {
            state.isLoading = action.payload;
        },
        setPokemon: (state, action) => {
            state.pokemon = action.payload;
        },
        setPokemonData: (state, action) => {
            state.pokemonData = action.payload;
        },
    }
})

export const { loadPokemon, setPokemon, setPokemonData } = pokemonSlice.actions;

// Peticiones

export const getAllPokemon = (page = 1) => {
    return async (dispatch) => {
        dispatch(loadPokemon(true));

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${(page - 1)* 5}`);  // Se obtienen los nombres de los Pokemon
        const data = await response.json();

        let pokemonData = []

        for (let i = 0; i < data.results.length; i++) {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.results[i].name}`);  // Se obtienen los datos de cada Pokemon
            const dataElement = await res.json();

            pokemonData.push(dataElement)
        };

        dispatch(setPokemon([data.count / 5,...data.results]));
        dispatch(setPokemonData(pokemonData))
        dispatch(loadPokemon(false));
    }
}

export const getPokemon = (name) => { // Busca un Pokemon en especifico
    if (!name) return getAllPokemon();  // Si no se indica el nombre devuelve los primeros Pokemon

    return async (dispatch) => {
        dispatch(loadPokemon(true));

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (response.ok) {
            const data = await response.json();

            dispatch(setPokemon([{name: data.name}]));
            dispatch(setPokemonData([data]));
        } else {
            dispatch(setPokemon([]));
            dispatch(setPokemonData([]));
        }

        dispatch(loadPokemon(false));
    }
}