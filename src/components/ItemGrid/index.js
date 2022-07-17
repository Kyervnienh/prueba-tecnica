import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardMedia, CardActions, CardContent, Typography, CardActionArea, Box, Grid } from "@mui/material";
import ModalImage from "../ModalImage";

const ItemGrid = (props) => {

    const [open, setOpen] = useState(false)

    const showShiny = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false)

    return (
        <Grid item xs={1} md={1} padding="auto">
            <Card sx={{
                width: '100%',
                minWidth: '200px',
                height: '300px'
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        sx={{
                            objectFit: 'contain'
                        }}
                        image={props.sprite}
                    />

                    <CardContent>
                        <Typography variant='h5' color="gray">{props.name}</Typography>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            color: 'gray'
                        }}>
                            {props.abilities.map((el, index) =>
                                <Typography
                                    key={index}
                                    sx={{
                                        textTransform: 'capitalize',
                                        fontSize: 14
                                    }}>{el}
                                </Typography>)
                            }
                        </Box>
                    </CardContent>
                </CardActionArea>

                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', width: "40%", justifyContent: 'space-between' }}>
                        {props.types.map((el, index) =>
                            <Typography
                                key={index}
                                color='gray'
                                sx={{
                                    textTransform: 'capitalize',
                                    fontSize: 14
                                }}>{el}
                            </Typography>)
                        }
                    </Box>

                    <Button
                        onClick={showShiny}
                        sx={{
                            textTransform: 'capitalize',
                            backgroundColor: '#47525E',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: '#47525E',
                                border: '1px solid #47525E'
                            }
                        }}>Shiny</Button>
                </CardActions>
            </Card>

            <ModalImage open={open} handleClose={handleClose} images={props.shiny} />
        </Grid>
    )
}

ItemGrid.propTypes = {
    sprite: PropTypes.string,
    name: PropTypes.string.isRequired,
    shiny: PropTypes.array,
    abilities: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired
}

export default ItemGrid;