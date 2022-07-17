import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const CardAbilities = () => {
    const textColor = '#47525E';

    const { abilitiesData } = useSelector(state => state.pokemon.pokemonData[0]);

    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: 400,
                marginTop: 3,
                border: '1px solid #47525E',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
            <CardContent>
                <Typography
                    variant="h5"
                    color={textColor}
                    sx={{ textTransform: 'capitalize' }}>Habilidades</Typography>

                {abilitiesData.map(el => (
                    <Typography
                        key={el.names[5].name}
                        sx={{
                            color: textColor,
                            fontSize: 15,
                            marginTop: 2
                        }}>
                        {el.names[5].name}: {el.flavor_text_entries.filter(text => text.language.name === "es").length ?
                            el.flavor_text_entries.filter(text => text.language.name === "es")[0].flavor_text
                            : el.flavor_text_entries.filter(text => text.language.name === "en")[0].flavor_text}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    )
}

export default CardAbilities;