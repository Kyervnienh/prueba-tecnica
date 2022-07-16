import { Pagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemon } from "../../store/slices/pokemon";


const PaginationList = () => {

    const bgColor = "gray"

    const count = Math.ceil(useSelector(state => state.pokemon.pokemon[0])) || 1;

    const dispatch = useDispatch();

    const changePage = (ev, value) => {
        ev.preventDefault();
        dispatch(getAllPokemon(value));
    }

    return (
        <Pagination
            count={count}
            variant="outlined"
            shape="rounded"
            hideNextButton
            hidePrevButton
            onChange={changePage}
            sx={{
                padding: 2,
                '& > ul': {
                    justifyContent: 'center',
                    '& > li > Button': { color: bgColor }
                },
                '& ul > li > .Mui-selected': {
                    backgroundColor: bgColor,
                    borderColor: bgColor,
                    color: 'white',
                    '&:hover': { backgroundColor: bgColor }
                }
            }}
        ></Pagination>
    )
}

export default PaginationList;