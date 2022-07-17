import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { useSelector } from 'react-redux';

const CarouselSprites = () => {

    const { sprites } = useSelector(state => state.pokemon.pokemonData[0])

    return (
        <Carousel
            navButtonsAlwaysVisible
            height={200}
            sx={{
                textAlign: 'center',
                width: '90%',
                maxWidth: 600
            }}>
            <img alt='vista frontal' style={{ height: '100%' }} src={sprites.front_default} />
            <img alt='vista trasera' style={{ height: '100%' }} src={sprites.back_default} />
            <img alt='vista frontal shiny' style={{ height: '100%' }} src={sprites.front_shiny} />
            <img alt='vista trasera shiny' style={{ height: '100%' }} src={sprites.back_shiny} />
        </Carousel>
    )
}

export default CarouselSprites;