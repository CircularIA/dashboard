// import { styled } from 'styled-components';
// import LensIcon from '@mui/icons-material/Lens';
import { Box} from '@mui/material';
//Stepper
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Seleccione una categoria de Indicador',
    'Seleccione un tipo',
    'Seleccione el indicador',
    'Puede ver los datos del indicador'
  ];

function Footer({currentView, setCurrentView}) {

    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Stepper activeStep={currentView} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label}   >
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>

    )

}



export default Footer