import { Box, Typography } from "@mui/material"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

//PropTypes
import PropTypes from 'prop-types';

Formule.propTypes = {
    direction: PropTypes.string,
    formulaText: PropTypes.string,
    formulaNumber: PropTypes.string,
}

function Formule({direction, formulaText, formulaNumber}) {
    
    if (direction === 'right') {
        return (
            <Box
                position={'relative'}
                width={'100%'}
                height={'100%'}
            >
                <Typography variant='h5' color='#008A55'
                    sx = {{
                        position: 'absolute',
                        left: '0%',
                        top: '50%',
                    }}>
                    {formulaNumber}
                </Typography>
                <ArrowRightAltIcon sx={{
                    fontSize: 50, 
                    strokeWidth:'3px', 
                    color: '#008A55', 
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(50%, -20%)' }} />
                <Typography  color='#008A55'
                    sx = {{
                        position: 'absolute',
                        fontSize: 15,
                        left: '100%',
                        top: '50%',
                        transform: 'translate(100%, -20%)'
                    }}
                >
                    {formulaText}
                </Typography>
            </Box>
        )
    } else if (direction === 'bottom') {
        return (
            <Box
                position={'relative'}
                width={'100%'}
                height={'100%'}
            >
                <Typography variant='h5' color='#008A55'
                    sx = {{
                        position: 'absolute',
                        left: '50%',
                        top: '0%',
                    }}>
                    {formulaNumber}
                </Typography>
                <ArrowRightAltIcon sx={{
                    fontSize: 50, 
                    strokeWidth:'3px', 
                    color: '#008A55', 
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(-20%, 50%) rotate(90deg)`  }} />
                <Typography  color='#008A55'
                    sx = {{
                        position: 'absolute',
                        fontSize: 15,
                        left: '50%',
                        top: '100%',
                        transform: 'translate(-20%, 140%)'
                    }}
                >
                    {formulaText}
                </Typography>
            </Box>
        )
    } else if (direction === 'top'){
        return (
            <Box
                position={'relative'}
                width={'100%'}
                height={'100%'}
            >
                <Typography variant='h5' color='#008A55'
                    sx = {{
                        position: 'absolute',
                        left: '50%',
                        top: '100%',
                    }}>
                    {formulaNumber}
                </Typography>
                <ArrowRightAltIcon sx={{
                    fontSize: 50, 
                    strokeWidth:'3px', 
                    color: '#008A55', 
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(-20%, -80%) rotate(270deg)`  }} />
                <Typography  color='#008A55'
                    sx = {{
                        position: 'absolute',
                        fontSize: 15,
                        left: '50%',
                        top: '0%',
                        transform: 'translate(-20%, -170%)'
                    }}
                >
                    {formulaText}
                </Typography>
            </Box>
        )
    }
}

export default Formule