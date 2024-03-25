import { Dialog, DialogTitle, Typography, IconButton, Divider, Stack, Chip, } from "@mui/material"
import { DialogContent, DialogContentText, Box } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import CircularidadSalida from '../../../assets/formulas/SalidaFormula.png'

//Component
import Formule from "./formule";

const setFirstLetterToUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const DialogContentIndicator = (indicatorName) => {
    console.log(indicatorName)
    if (indicatorName === 'porcentaje de valorizacion ciclo biologico') {
        return (
            <DialogContent
                sx={{
                    background: '#FFF',
                    borderRadius: '8px',
                    border: '1px solid #BBB',
                    width: '100%',
                    height: '100%',
                }}
            >
                <DialogContentText>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        padding={'10%'}
                    >
                        {/* Numerador */}
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            marginBottom={'2%'}
                        >
                            <Formule direction={'top'} formulaText={"Residuos reciclados"} formulaNumber={"M1"}/>
                        </Box>
                        <Divider sx={{ width: '100%', marginTop: '2%', marginBottom: '2%' }} />
                        {/* Denominador */}
                        <Stack
                            direction={'row'}
                            gap={10}
                        >
                            <Formule direction={'bottom'} formulaText={"Residuos reciclados"} formulaNumber={"M1"}/>
                            <Typography variant="h4">
                                +
                            </Typography>
                            <Formule direction={'bottom'} formulaText={"Residuos no reciclados"} formulaNumber={"M2"}/>
                        </Stack>
                    </Box>
                </DialogContentText>
            </DialogContent>
        )
    } else if (indicatorName === 'porcentaje de valorizacion ciclo tecnico') {
        return (
            <DialogContent
                sx={{
                    background: '#FFF',
                    borderRadius: '8px',
                    border: '1px solid #BBB',
                    width: '100%',
                    height: '100%',
                }}
            >
                <DialogContentText>
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        padding={'2%'}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            {/* Numerador */}
                            <Box
                                display={'flex'}
                                flexDirection={'row'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                marginTop={'2%'}>
                                <Typography variant='h5' color='#008A55'>
                                    Val PEC * 100
                                </Typography>
                            </Box>
                            <Divider sx={{ width: '100%', marginTop: '2%', marginBottom: '2%' }} />
                            {/* Denominador */}
                            <Box
                                display={'flex'}
                                flexDirection={'row'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                marginTop={'2%'}>
                                <Typography variant='h5' color='#008A55'>
                                    (Entrada REsiduos + Factor Composición) / 100
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </DialogContentText>
            </DialogContent>
        )
    } else if (indicatorName === 'porcentaje de circularidad de salida') {
        return (
            <DialogContent
                sx={{
                    position: 'relative', // Añade posicionamiento relativo al contenido del diálogo
                    background: '#FFF',
                    borderRadius: '8px',
                    border: '1px solid #BBB',
                    width: '100%',
                    height: '100%',
                    padding: '16px', // Agrega padding para que la leyenda no toque los bordes del diálogo
                }}
            >
                <DialogContentText>
                    {/* Aquí puedes colocar tu imagen de la fórmula */}
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        padding={'15%'}
                    >
                        <img src={CircularidadSalida} alt="Fórmula" style={{ maxWidth: '90%', height: 'auto' }} />
                    </Box>
                    {/* Aquí puedes crear tu leyenda */}
                    <Box
                        sx={{
                            position: 'absolute', // Posicionamiento absoluto para la leyenda
                            bottom: '10%', // Ajusta la distancia desde la parte inferior
                            right: '10%', // Ajusta la distancia desde la parte derecha
                           
                            borderRadius: '20px', // Bordes redondeados
                            border: '3px solid #00945E', // Borde con el color deseado
                            padding: '8px', // Padding interno de la leyenda
                        }}
                    >
                        <Typography variant="subtitle1">
                        <Box component="span" sx={{ fontWeight: 'bold', color: '#00B971' }}>
                            M1
                        </Box>
                        {' '}<span style={{ color: 'black' }}>Residuos valorizados</span>
                        </Typography>
                        <Typography variant="subtitle1">
                        <Box component="span" sx={{ fontWeight: 'bold', color: '#00B971' }}>
                            M2
                        </Box>
                        {' '}<span style={{ color: 'black' }}>Residuos no valorizados</span>
                        </Typography>
                        <Typography variant="subtitle1">
                        <Box component="span" sx={{ fontWeight: 'bold', color: '#00B971' }}>
                            M1 + M2
                        </Box>
                        {' '}<span style={{ color: 'black' }}>Residuos totales</span>
                        </Typography>
                    </Box>
                </DialogContentText>
            </DialogContent>
        )
    }
}


function FormulaDialog({ open, handleClose, indicator }) {

    return (
        <Dialog open={open} onClose={handleClose}
            maxWidth={'lg'}
            fullWidth={true}
            sx={{
                '& .MuiDialog-paper': {
                    background: 'rgba(241, 241, 241, 1)',
                }
            }}
        >
            <DialogTitle
                sx={{
                    background: 'linear-gradient(90deg, #0DFF6E 0%, #00945E 100%)',
                    color: '#ffff',
                    paddingLeft: '5%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant='h5' color='#ffff' >
                    Formula - {setFirstLetterToUpperCase(indicator.name)}
                </Typography>
                <IconButton onClick={handleClose}>
                    <CloseIcon fontSize="large" sx={{ color: '#ffff' }} />
                </IconButton>
            </DialogTitle>
            {DialogContentIndicator(indicator.name)}
        </Dialog>
    )
}

export default FormulaDialog