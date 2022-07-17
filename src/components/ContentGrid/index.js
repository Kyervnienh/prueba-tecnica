import React, { useEffect } from 'react';
import { Typography, Grid } from '@mui/material'
import ItemGrid from "../ItemGrid";
import { useSelector, useDispatch } from "react-redux";
import { concatGetAllPokemon, getAllPokemon } from '../../store/slices/pokemon';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingComponent from '../LoadingComponent';

const ContentGrid = () => {

    const { pokemonData, isLoading, page } = useSelector(state => state.pokemon);
    const dispatch = useDispatch();

    const getNextPokemon = () => {
        dispatch(concatGetAllPokemon(page + 1, 8))
    }

    useEffect(() => {
        dispatch(getAllPokemon(1, 8));
    }, [dispatch])

    return (

        !isLoading ?
            pokemonData.length ?
                <InfiniteScroll
                dataLength={pokemonData.length}
                next={getNextPokemon}
                hasMore={true}
                loader={<LoadingComponent />}
                endMessage={
                    <Typography>Ya no quedan más Pokémon por ver :(</Typography>
                }
                >
                    <Grid container spacing={8} columns={{ xs: 1, md: 4 }} sx={{ paddingTop: 5, paddingBottom: 5 }}>
                        {pokemonData.map(item => (
                            <ItemGrid
                                key={item.id}
                                types={item.types.map(el => el.type.name)}
                                abilities={item.abilities.map(el => el.ability.name)}
                                sprite={item.sprites.front_default}
                                name={item.name}
                                shiny={[item.sprites.back_shiny, item.sprites.front_shiny]} />
                        ))}
                    </Grid>
                </InfiniteScroll>
                : <Typography> No se encontraon Pokemon</Typography> // Si no se está haciendo una petición y no hay datos se muestra "No se encontraron Pokemon"
            : <LoadingComponent />

    )
}

export default ContentGrid;