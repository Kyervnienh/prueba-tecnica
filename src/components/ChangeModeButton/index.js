import { Button } from "@mui/material"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { changeView } from "../../store/slices/pokemon";

const ChangeModeButton = (props) => {

    const buttonColor = "#47525E";

    const dispatch = useDispatch();

    const changeListMode = (ev) => {
        dispatch(changeView(ev.target.innerText === "Lista" ? true : false))  // Se cambia de modo lista a cuadricula y viceversa
    }

    return (
        props.active ?
            <Button
                variant="contained"
                onClick={changeListMode}
                sx={{
                    backgroundColor: buttonColor,
                    width: '100px',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: buttonColor
                    }
                }}>{props.children}</Button>
            :
            <Button
                variant="outlined"
                onClick={changeListMode}
                sx={{
                    borderColor: buttonColor,
                    width: '100px',
                    textTransform: 'none',
                    color: buttonColor,
                    '&:hover': {
                        backgroundColor: buttonColor,
                        color: 'white',
                        borderColor: buttonColor
                    }
                }}>{props.children}</Button>
    )
}

ChangeModeButton.propTypes = {
    active: PropTypes.bool.isRequired,
}

export default ChangeModeButton;