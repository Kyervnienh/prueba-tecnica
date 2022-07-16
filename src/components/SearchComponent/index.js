import { styled, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../../store/slices/pokemon';

const SearchComponent = () => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: 8,
        width: '34%',
        minWidth: 300,
        border: '2px solid #EFF2F7',
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#97A3B5'
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        fontWeight: 'bold',
        fontSize: 16,
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(2, 2, 2, 0),
            paddingLeft: `calc(1em + ${theme.spacing(6)})`,
            
        },
    }));

    const dispatch = useDispatch()

    const searchPokemon = (ev) => {
        if(ev.code === "Enter") {
            dispatch(getPokemon(ev.currentTarget.value))   // Si se detecta la tecla "enter" busca el Pokemon escrito en el buscador
            ev.currentTarget.value = "";
        };
    }

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Buscar Pokémon"
                inputProps={{ 'aria-label': 'search' }}
                onKeyDown={searchPokemon}
            />
        </Search>
    )
}

export default SearchComponent;