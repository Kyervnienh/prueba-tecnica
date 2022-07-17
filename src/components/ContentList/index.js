import React, { useEffect } from 'react';
import { Box, List, ListItem, ListItemText, TableContainer } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "../ItemList";
import { getAllPokemon } from '../../store/slices/pokemon';
import LoadingComponent from '../LoadingComponent';

const ContentList = () => {

    const { pokemonData, isLoading } = useSelector(state => state.pokemon);
    const dispatch = useDispatch();

    const fontStyle = {
        fontWeight: 'bold',
        fontSize: 14
    }

    useEffect(() => {
        dispatch(getAllPokemon());
    }, [dispatch])

    return (
        <TableContainer>
            <List sx={{ minWidth: 500 }}>
                <ListItem sx={{ textAlign: "center", padding: 0 }}>
                    <Box sx={{
                        display: 'flex',
                        width: '90%',
                        backgroundColor: '#EFF2F7',
                        paddingTop: 3, paddingBottom: 3,
                        border: '2px solid #EFF2F7',
                    }}>
                        <ListItemText
                            primary="#"
                            sx={{ width: '10%', '& > span': fontStyle }} />
                        <ListItemText
                            primary="Nombre"
                            sx={{ width: '25%', '& > span': fontStyle }} />
                        <ListItemText
                            primary="Vista Previa"
                            sx={{ width: '20%', '& > span': fontStyle }} />
                        <ListItemText
                            primary="Tipo"
                            sx={{ width: '20%', '& > span': fontStyle }} />
                        <ListItemText
                            primary='Habilidades'
                            sx={{ width: '25%', '& > span': fontStyle }} />
                    </Box>
                    <ListItemText sx={{ width: '10%' }} />
                </ListItem>

                {!isLoading ?  // Comprueba si hay una petición activa a la API
                    pokemonData.length ? pokemonData.map((item, index) => (  // Comprueba si hay datos para mostrar
                        <ItemList
                            key={item.id}
                            id={item.id}
                            type={item.types.map(el => el.type.name).reduce((accum, current) => accum + " / " + current)}
                            abilities={item.abilities.map(el => el.ability.name).reduce((accum, current) => accum + " / " + current)}
                            sprite={item.sprites.front_default}
                            name={item.name}
                            shiny={[item.sprites.back_shiny, item.sprites.front_shiny]}
                            even={index % 2} />
                    )) : <ListItemText primary={"No se encontraron Pokemon"} /> // Si no se está haciendo una petición y no hay datos se muestra "No se encontraron Pokemon"
                    : <LoadingComponent />}
            </List>
        </TableContainer>
    )
}

export default ContentList;