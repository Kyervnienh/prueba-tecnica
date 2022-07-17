import React, { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Container, Link, Grid, Typography } from '@mui/material';
import CarouselSprites from '../../components/CarouselSprites';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../store/slices/pokemon';
import CardPokemonDescription from '../../components/CardPokemonDescription';
import CardAbilities from '../../components/CardAbilities';
import CardPokemonMoves from '../../components/CardPokemonMoves';
import LoadingComponent from '../../components/LoadingComponent';

const Description = () => {

    const namePokemon = useParams().namePokemon;

    const dispatch = useDispatch();
    const { pokemonData, isLoading } = useSelector(state => state.pokemon);

    useEffect(() => {
        dispatch(getPokemon(namePokemon));

    }, [dispatch, namePokemon])

    return (
        <Container maxWidth="md" sx={{ paddingTop: 3 }}>
            <Link component={RouterLink} to="/" variant="h4" underline="none" fontWeight="bold" color="#47525E">Pokédex</Link>

            {
                !isLoading ?
                    pokemonData.length === 1 ?
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <CarouselSprites />

                            <Grid
                                container
                                spacing={3}
                                columns={{ xs: 1, md: 2, lg: 2 }}
                                sx={{ marginTop: 3, marginBottom: 3 }}>

                                <Grid item xs={1} md={1} lg={1}>
                                    <CardPokemonDescription />
                                    <CardAbilities />
                                </Grid>

                                <Grid item xs={1} md={1} lg={1}>
                                    <CardPokemonMoves />
                                </Grid>

                            </Grid>
                        </Box>
                        : <Typography variant="h4">No se encontró el pokemon</Typography> 
                    : <LoadingComponent />
            }
        </Container>

    )
}

export default Description;