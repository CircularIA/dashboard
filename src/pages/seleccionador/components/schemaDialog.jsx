import { Dialog, DialogTitle, Typography, IconButton, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

//Component
import Schema from "./schema"; // Asume que este componente maneja la visualización de imágenes

const setFirstLetterToUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const DialogContentSchema = (indicatorName, image) => {
    // Asume que 'images' es un objeto que contiene las rutas de las imágenes para cada indicador
    return (
        <Box
            sx={{
                background: '#FFF',
                border: '1px solid #BBB',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2%'
            }}
        >
            <Schema src={image} alt={`Esquema de ${indicatorName}`} />
        </Box>
    );
};

function SchemaDialog({ open, handleClose, indicator, images }) {
    const imageSrc = images[indicator.name];
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
                    Esquema - {setFirstLetterToUpperCase(indicator.name)}
                </Typography>
                <IconButton onClick={handleClose}>
                    <CloseIcon fontSize="large" sx={{ color: '#ffff' }} />
                </IconButton>
            </DialogTitle>
            {DialogContentSchema(indicator.name, imageSrc)}
        </Dialog>
    );
}

export default SchemaDialog;
