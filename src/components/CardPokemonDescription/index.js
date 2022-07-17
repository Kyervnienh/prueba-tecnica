import { Card, CardContent, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const CardPokemonDescription = () => {
    const textColor = '#47525E';

    const pokemonData = useSelector(state => state.pokemon.pokemonData[0]);

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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Typography
                        variant="h5"
                        color={textColor}
                        sx={{ textTransform: 'capitalize' }}>{pokemonData.name}</Typography>

                    <Box sx={{ display: 'flex', gap: 1 }}>

                        {pokemonData.types.map((el, index) =>
                            <Typography
                                key={index}
                                color='gray'
                                sx={{
                                    textTransform: 'capitalize',
                                    fontSize: 16,
                                    color: textColor,
                                }}>{el.type.name}
                            </Typography>)
                        }
                    </Box>
                </Box>

                <Typography
                    sx={{
                        color: textColor,
                        fontSize: 15,
                        marginTop: 2
                    }}>Descripción:
                    {pokemonData.dataSpecies.flavor_text_entries.filter(text => text.language.name === "es").length ?
                        pokemonData.dataSpecies.flavor_text_entries.filter(text => text.language.name === "es")[0].flavor_text
                        : pokemonData.dataSpecies.flavor_text_entries[0].flavor_text}</Typography>
            </CardContent>
        </Card>
    )
}

export default CardPokemonDescription;