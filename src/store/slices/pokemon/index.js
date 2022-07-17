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
            state.page = action.payload.page;
            state.total = action.payload.total;
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

        dispatch(setPokemonData({ total: data.count / limit, page: page, pokemonData: pokemonData }))
        dispatch(loadPokemon(false));
    }
}

export const getPokemon = (name) => { // Busca un Pokemon en especifico
    if (!name) return getAllPokemon();  // Si no se indica el nombre devuelve los primeros Pokemon

    return async (dispatch) => {
        dispatch(loadPokemon(true));

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);  // Se obtienen algunos datos del Pokemon
        if (response.ok) {
            const data = await response.json();

            const dataSpecies = await fetch(data.species.url); // Se obtienen los datos de la especie
            const dataSpeciesFormat = await dataSpecies.json();

            let abilitiesData = [];

            for (let i = 0; i < data.abilities.length; i++) {
                const abilityData = await fetch(data.abilities[i].ability.url);          // Se obtienen los datos de las habilidades del Pokemon
                const abilityDataFormat = await abilityData.json();

                abilitiesData.push(abilityDataFormat)
            }

            const firstMoves = data.moves.slice(0, 10);    // Se obtienen los nombres de los primeros 10 movimientos

            let movesData = [];

            for (let i = 0; i < firstMoves.length; i++) {
                const moveData = await fetch(firstMoves[i].move.url);       // Se obtienen los datos de cada movimiento
                const moveDataFormat = await moveData.json();

                movesData.push(moveDataFormat);
            }

            dispatch(setPokemonData({ pokemonData: [{ ...data, dataSpecies: dataSpeciesFormat, abilitiesData: abilitiesData, movesData: movesData }] }));
        } else {
            dispatch(setPokemonData({ pokemonData: [] }));
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

        dispatch(concatPokemonData({total: data.count / limit, page: page, pokemonData: pokemonData }))
    }
}