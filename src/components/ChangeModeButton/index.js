import { Button } from "@mui/material"
import PropTypes from 'prop-types';

const ChangeModeButton = (props) => {

    const buttonColor = "#47525E"

    return (
        props.active ? <Button variant="contained" sx={{
            backgroundColor: buttonColor,
            width: '100px',
            textTransform: 'none',
            '&:hover': {
                backgroundColor: buttonColor
            }
        }}>{props.children}</Button>
            :
            <Button variant="outlined" sx={{
                borderColor: buttonColor,
                width: '100px',
                textTransform: 'none',
                color:  buttonColor,
                '&:hover': {
                    backgroundColor: buttonColor,
                    color: 'white',
                    borderColor: buttonColor
                }
            }}>{props.children}</Button>
    )
}

ChangeModeButton.propTypes = {
    active: PropTypes.bool.isRequired
}

export default ChangeModeButton;