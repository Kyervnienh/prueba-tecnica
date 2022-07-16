import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import ItemList from "../ItemList";

const ContentList = () => {

    const { pokemonData, isLoading } = useSelector(state => state.pokemon); 

    const fontStyle = { fontWeight: 'bold', fontSize: 14 }

    return (
        <List sx={{ minWidth: '500px' }}>
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
                        key={item.name}
                        id={item.id}
                        type={item.types.map(el => el.type.name).reduce((accum, current) => accum + " / " + current)}
                        abilities={item.abilities.map(el => el.ability.name).reduce((accum, current) => accum + " / " + current)}
                        sprite={item.sprites.back_default}
                        name={item.name}
                        even={index % 2} />
                )) : <ListItemText primary={"No se encontraron Pokemon"} /> // Si no se está haciendo una petición y no hay datos se muestra "No se encontraron Pokemon"
                : <ListItemText primary={"Buscando Pokemon"} />  }

        </List>
    )
}

export default ContentList;