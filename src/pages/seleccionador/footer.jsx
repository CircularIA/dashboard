// import { styled } from 'styled-components';
// import LensIcon from '@mui/icons-material/Lens';
import { Box} from '@mui/material';
//Stepper
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const steps = [
    'Seleccione una categoria de Indicador',
    'Seleccione un tipo',
    'Seleccione el indicador',
    'Puede ver los datos del indicador'
  ];

function Footer({currentView, setCurrentView}) {

    const handleClick = (e) => {
        //Solamente podra viajar si el indice es menor al actual
        if (e < currentView){
            setCurrentView(e)
        }
    }
    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Stepper activeStep={currentView} alternativeLabel>
                {steps.map((label, index) => (
                    <StyledStep key={label}   onClick={() => handleClick(index)} >
                        <StepLabel>{label}</StepLabel>
                    </StyledStep>
                ))}
            </Stepper>
        </Box>

    )

}

Footer.propTypes = {
    currentView: PropTypes.number.isRequired,
    setCurrentView: PropTypes.func.isRequired
}

export default Footer

const StyledStep = styled(Step)`
    cursor: pointer;
`