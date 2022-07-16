import React from "react";
import PropTypes from 'prop-types';
import { ListItemButton, ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import { Box } from "@mui/system";


const ItemList = (props) => {

    const selectPokemon = () => {
        console.log(props.name)
    }
    const bgColor = props.even ? "#F9FAFC" : "";

    return (
        <ListItem sx={{ textAlign: 'center', fontSize: 14, padding: 0, color: '#8D949B' }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '90%',
                backgroundColor: bgColor,
                border: '2px solid #EFF2F7',
                borderTop: 0,
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#EFF2F7'
                }
            }}>
                <ListItemText
                    onClick={selectPokemon}
                    sx={{ width: '10%' }}
                    primary={props.id} />
                <ListItemText onClick={selectPokemon}
                    sx={{ width: '25%' }}
                    primary={props.name} />

                <ListItemAvatar onClick={selectPokemon} sx={{ width: '20%' }}>
                    <img src={props.sprite} alt={props.name} />
                </ListItemAvatar>

                <ListItemText
                    onClick={selectPokemon}
                    sx={{ width: '20%' }}
                    primary={props.type} />
                <ListItemText
                    onClick={selectPokemon}
                    sx={{ width: '25%' }}
                    primary={props.abilities} />
            </Box>
            <ListItemButton
                onClick={selectPokemon}
                sx={{
                    width: '9%',
                    justifyContent: 'center',
                    color: 'white',
                    background: '#47525E',
                    borderRadius: 1,
                    marginLeft: '1%',
                    '&:hover': {
                        border: '1px solid #47525E',
                        color: '#47525E',
                        backgroundColor: 'white'
                    }
                }}>Shiny</ListItemButton>
        </ListItem>
    )
}

ItemList.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    abilities: PropTypes.string.isRequired,
    sprite: PropTypes.string
}

export default ItemList;