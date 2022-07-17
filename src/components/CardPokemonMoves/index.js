import React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import { useSelector } from 'react-redux';


const CardPokemonMoves = () => {

    const textStyle = {
        color: '#C0C0C1',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }

    const pokemonMoves = useSelector(state => state.pokemon.pokemonData[0].movesData);

    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: 400,
                border: '1px solid #47525E',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
            <CardContent>
                <Typography variant="h5" color="gray" >Movimientos</Typography>

                {pokemonMoves.map(move => (
                    <Box sx={{ width: '100%' }} key={move.id} >
                        <Typography color="gray" sx={{ fontSize: 16, fontWeight: 'bold', marginTop: 1 }}>
                            {move.names.filter(el => el.language.name === "es").length ?
                                move.names.filter(el => el.language.name === "es")[0].name
                                : move.names.filter(el => el.language.name === "en")[0].name}
                        </Typography>

                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>

                            <Box>
                                <Typography sx={textStyle}>Poder</Typography>
                                <Typography sx={textStyle}>{move.power || 0}</Typography>
                            </Box>

                            <Box>
                                <Typography sx={textStyle}>Precisión</Typography>
                                <Typography sx={textStyle}>{move.accuracy || 0}</Typography>
                            </Box>

                            <Box>
                                <Typography sx={textStyle}>Tipo</Typography>
                                <Typography sx={textStyle}>{move.type.name || "Normal"}</Typography>
                            </Box>

                        </Box>

                        <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
                    </Box>
                ))}

            </CardContent>
        </Card>
    )
}

export default CardPokemonMoves;