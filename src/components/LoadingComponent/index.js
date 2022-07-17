import { Box } from '@mui/material'
import LoopIcon from '@mui/icons-material/Loop';
import './index.css';

const LoadingComponent = () => {

    return (
        <Box sx={{
            textAlign: 'center',
            padding: 2
            }}>
            <LoopIcon className="loadingItem" sx={{color: 'gray', fontSize: 60}} />
        </Box>
    )
}

export default LoadingComponent;