// import { styled } from 'styled-components';
// import LensIcon from '@mui/icons-material/Lens';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from "../../theme";

//Stepper
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

// const ContentFooter = styled(Box)`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
// `
// const FirstCircle = styled(LensIcon)`
//     margin-right: 4%;
//     color: #989898;
// `
const steps = [
    'Seleccione una categoria de Indicador',
    'Seleccione un tipo',
    'Seleccione el indicador',
    'Puede ver los datos del indicador'
  ];

function Footer({currentView, setCurrentView}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Stepper activeStep={currentView} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>

    )
    // if (currentView == 0) {
    //     return (
    //         <ContentFooter>
    //             <IconButton>
    //                 <LensIcon style={{
    //                     color: colors.primary[500]
    //                 }}  ></LensIcon>
    //             </IconButton>
    //         </ContentFooter>
    //     )
    // } else if (currentView == 1) {
    //     return (
    //         <ContentFooter>
    //             <IconButton>
    //                 <FirstCircle></FirstCircle>
    //             </IconButton>
    //             <IconButton>
    //                 <LensIcon style={{
    //                     color: colors.primary[500]
    //                 }}  ></LensIcon>
    //             </IconButton>
    //         </ContentFooter>
    //     )
    // } else if (currentView == 2) {
    //     return (
    //         <ContentFooter>
    //             <IconButton>
    //                 <FirstCircle></FirstCircle>
    //             </IconButton>
    //             <IconButton>
    //                 <FirstCircle></FirstCircle>
    //             </IconButton>
    //             <IconButton>
    //                 <LensIcon style={{
    //                     color: colors.primary[500]
    //                 }}  ></LensIcon>
    //             </IconButton>
    //         </ContentFooter>
    //     )
    // }

}

export default Footer