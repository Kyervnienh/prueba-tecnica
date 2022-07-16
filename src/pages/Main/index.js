import { Box, Container, Link } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ChangeModeButton from '../../components/ChangeModeButton';
import ContentList from '../../components/ContentList';
import PaginationList from '../../components/PaginationList';
import SearchComponent from '../../components/SearchComponent';
import { getAllPokemon } from '../../store/slices/pokemon';

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemon());
    }, [dispatch])

    return (
        <Container maxWidth="lg" sx={{ paddingTop: 3 }}>
            <Link href="/" variant="h4" underline="none" fontWeight="bold" color="#47525E">Pokédex</Link>
            <Box sx={{
                marginTop: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <SearchComponent />
                <Box sx={{
                    display: 'flex',
                }}>
                    <ChangeModeButton active={true} >Lista</ChangeModeButton>
                    <ChangeModeButton active={false} >Cuadrícula</ChangeModeButton>
                </Box>
            </Box>

            <ContentList />
            <PaginationList />
        </Container>
    )
}

export default Main;