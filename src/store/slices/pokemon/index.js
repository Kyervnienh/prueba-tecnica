import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 1,
        total: 0,
        pokemonData: [],
        isLoading: false,
        listMode: true
    },
    reducers: {
        loadPokemon: (state, action) => {
            state.isLoading = action.payload;
        },
        setPokemonData: (state, action) => {
            state.pokemonData = action.payload.pokemonData;
            state.total = action.payload.total;
            state.page = action.payload.page;
        },
        setListMode: (state, action) => {
            state.listMode = action.payload;
        },
        concatPokemonData: (state, action) => {
            state.pokemonData = state.pokemonData.concat(action.payload.pokemonData);
            state.page = action.payload.page
        }
    }
})

export const { loadPokemon, setPokemonData, setListMode, concatPokemonData } = pokemonSlice.actions;

export const changeView = (mode) => {
    return (dispatch) => dispatch(setListMode(mode));
}

// Peticiones

export const getAllPokemon = (page = 1, limit = 5) => {
    return async (dispatch) => {
        dispatch(loadPokemon(true));

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page - 1) * limit}`);  // Se obtienen los nombres de los Pokemon
        const data = await response.json();

        let pokemonData = []

        for (let i = 0; i < data.results.length; i++) {
            const res = await fetch(data.results[i].url);  // Se obtienen los datos de cada Pokemon
            const dataElement = await res.json();

            pokemonData.push(dataElement)
        };

        dispatch(setPokemonData({ total: data.count / 5, page: page, pokemonData: pokemonData }))
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

            dispatch(setPokemonData({pokemonData: [data]}));
        } else {
            dispatch(setPokemonData({pokemonData: []}));
        }

        dispatch(loadPokemon(false));
    }
}

export const concatGetAllPokemon = (page = 1, limit = 5) => {
    return async (dispatch) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page - 1) * limit}`);  // Se obtienen los nombres de los Pokemon
        const data = await response.json();

        let pokemonData = []

        for (let i = 0; i < data.results.length; i++) {
            const res = await fetch(data.results[i].url);  // Se obtienen los datos de cada Pokemon
            const dataElement = await res.json();

            pokemonData.push(dataElement)
        };

        dispatch(concatPokemonData({ page: page, pokemonData: pokemonData }))
    }
}