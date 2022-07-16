import { Modal, Box } from "@mui/material";
import PropTypes from 'prop-types'

const ModalImage = (props) => {

    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <Box sx={{
                position: 'absolute',
                top: "50%",
                left: "50%",
                transform: 'translate(-50%, -50%)',
                width: 300,
                backgroundColor: 'white',
                display: 'flex',
                border: '2px solid #47525E',
                boxShadow: 24,
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <img src={props.images[0]} alt="Shiny images" style={{ minWidth: "120px" }} />
                <img src={props.images[1]} alt="Shiny images" style={{ minWidth: "120px" }} />
            </Box>
        </Modal>
    )
}

ModalImage.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired

}

export default ModalImage;