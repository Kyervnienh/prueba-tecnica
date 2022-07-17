import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Link } from '@mui/material';
import { useSelector } from 'react-redux';
import ChangeModeButton from '../../components/ChangeModeButton';
import ContentGrid from '../../components/ContentGrid';
import ContentList from '../../components/ContentList';
import PaginationList from '../../components/PaginationList';
import SearchComponent from '../../components/SearchComponent';

const Main = () => {

    const { listMode } = useSelector(state => state.pokemon)

    return (
        <Container maxWidth="lg" sx={{ paddingTop: 3 }}>
            <Link component={RouterLink} to="/" variant="h4" underline="none" fontWeight="bold" color="#47525E">Pokédex</Link>
            <Box sx={{
                marginTop: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1
            }}>
                <SearchComponent />
                <Box sx={{
                    display: 'flex',
                }}>
                    <ChangeModeButton active={listMode === true ? true : false} >Lista</ChangeModeButton>
                    <ChangeModeButton active={listMode === true ? false : true} >Cuadrícula</ChangeModeButton>
                </Box>
            </Box>

            {listMode ?
                <>
                    <ContentList />
                    <PaginationList />
                </> :
                <ContentGrid />
            }


        </Container>
    )
}

export default Main;