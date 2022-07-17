import React, { useState } from "react";
import PropTypes from 'prop-types';
import { ListItemButton, ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import { Box } from "@mui/system";
import ModalImage from "../ModalImage";


const ItemList = (props) => {
    const bgColor = props.even ? "#F9FAFC" : "";

    const [open, setOpen] = useState(false)

    const showShiny = () => setOpen(true);
    const handleClose = () => setOpen(false)

    const selectPokemon = () => {
        console.log(props.name)
    }

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
                onClick={showShiny}
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

            <ModalImage open={open} handleClose={handleClose} images={props.shiny} />
        </ListItem>
    )
}

ItemList.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    abilities: PropTypes.string.isRequired,
    sprite: PropTypes.string,
    shiny: PropTypes.array
}

export default ItemList;