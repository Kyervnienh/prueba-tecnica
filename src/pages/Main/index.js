import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContentList from '../../components/ContentList';
import SearchComponent from '../../components/SearchComponent';
import { getAllPokemon } from '../../store/slices/pokemon';

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemon());
    }, [dispatch])


    return (
        <Container maxWidth="lg">
            <Typography variant="h4" color="gray" fontWeight="bold">Pokédex</Typography>
            <Box sx={{marginTop: 3}}>
                <SearchComponent />
            </Box>

            <ContentList />
        </Container>
    )
}

export default Main;