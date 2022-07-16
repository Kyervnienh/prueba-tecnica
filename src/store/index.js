import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './slices/pokemon';
import { userSlice } from './slices/user';

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        pokemon: pokemonSlice.reducer
    }
});