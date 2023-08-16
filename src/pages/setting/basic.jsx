import { useState } from "react";
import { Box, Grid, IconButton, TextField, Typography, InputAdornment} from "@mui/material"
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import ChileIcon from './../../assets/chile.svg';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//Form components
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import {styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const StyledButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(90deg, #008A55 0%, #06BD60 50.52%, #0DFF6E 100%)',
    borderRadius: '12px',
    color: '#ffff',
    padding: '0px 5% 0px 5%',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    background: '#FFF',
    borderRadius: '8px',
    border: '1px solid #BBB',
    
}));

function Basic() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () =>{
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Box
            width={'100%'}
            height={'100%'}
            display={'flex'}
            flexDirection={'column'}
        >
            <Box>
                <Typography variant='h4' color='#000' fontWeight={'bold'}>
                    HOLA! EMPRESA XXX
                </Typography>
            </Box>
            <Box
                display={'flex'}
                flexDirection={'row'}
                alignContent={'center'}
                marginTop={'2%'}
            >
                <Grid container >
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}
                        sx = {{
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignContent: 'flex-start',
                            paddingLeft: '1%',
                        }}
                    >
                        <Stack  spacing={6} 
                            sx = {{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant='h4' color='#000' fontWeight={'bold'}>
                                PERFIL
                            </Typography>
                            <Box
                                sx = {{
                                    borderRadius: '50%',
                                    width: '170px',
                                    height: '170px',
                                    backgroundColor:'#D9D9D9',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <CameraAltRoundedIcon 
                                sx = {{ 
                                    color: '#000', 
                                    fontSize: 50,
                                    borderRadius: '50%',
                                    background: 'rgba(217, 217, 217, 1)',
                                }}/>
                            </Box>
                            <StyledButton variant="contained" size="large" sx = {{ width: '170px', height: '50px'}}>
                                Carga
                            </StyledButton>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} lg={8} xl={9}
                        component={'form'}
                        sx = {{
                            '& .MuiTextField-root': {
                                width: '100%',
                                maxWidth: '351px',
                                margin: '0px 5px 10% 0px',
                            }
                        }}
                    >
                        {/* Row 1 */}
                        <Box>
                            <StyledTextField
                                label="Nombre de la Empresa"
                                multiline
                                maxRows={4}
                                size= 'small'
                            />
                            <StyledTextField
                                label="Sector / Industria"
                                multiline
                                maxRows={4}
                                size= 'small'
                            />
                        </Box>
                        {/* Row 2 */}
                        <Box>
                            <StyledTextField
                                label="Telefono"
                                multiline
                                maxRows={4}
                                size= 'small'
                            />
                            <StyledTextField
                                label="Tamaño de la empresa"
                                multiline
                                maxRows={4}
                                size= 'small'
                            />
                        </Box>
                        {/* Row 3 */}
                        <Box>
                            <StyledTextField
                                label="Region"
                                multiline
                                maxRows={4}
                                size= 'small'
                            />
                            <StyledTextField
                                label="Ubicacion"
                                multiline
                                maxRows={4}
                                size= 'small'
                            />
                        </Box>
                        {/* Row 4  */}
                        <Box>
                            <StyledTextField
                                label="Sucursal"
                                multiline
                                maxRows={4}
                                size= 'small'
                            />
                            <StyledButton onClick={handleClickOpen} variant="contained" size="large" sx = {{ 
                                width: '100%',
                                maxWidth: '351px', 
                                height: '42px'
                            }}>
                                Agregar Sucursal
                            </StyledButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* Dialog */}
            <Dialog open={open} onClose={handleClose}
                maxWidth={'md'}
                fullWidth={true}
                sx = {{
                    '& .MuiDialog-paper': {
                        background: 'rgba(241, 241, 241, 1)',
                    }
                }}
            >
                <DialogTitle
                    sx = {{
                        background: 'linear-gradient(90deg, #0DFF6E 0%, #00945E 100%)',
                        color: '#ffff',
                        paddingLeft: '5%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant='h5' color='#ffff' >
                        Datos de Sucursal
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon fontSize="large" sx = {{ color: '#ffff' }}/>
                    </IconButton>
                </DialogTitle>
                <DialogContent
                    sx = {{
                        paddingLeft: '5%',
                    }}
                >
                    {/* Form */}
                    <DialogContentText paddingTop={'5%'} >
                        <Box
                            component={'form'}
                            width={'100%'}
                            height={'100%'}
                            sx = {{
                                '& .MuiTextField-root': {
                                    margin: '0px 5px 2% 0px',
                                    width: '100%',
                                }
                            }}
                        >
                            {/* Row 1 */}
                            <Box>
                                <StyledTextField
                                    label="Nombre legal de la sucursal"
                                    multiline
                                    maxRows={1}
                                    size= 'small'
                                    sx = {{
                                        maxWidth: '400px',
                                        width: '100%'
                                    }}
                                />
                                <StyledTextField
                                    label="Nombre del encargado"
                                    multiline
                                    maxRows={1}
                                    size= 'small'
                                    sx = {{
                                        maxWidth: '400px',
                                        width: '100%'
                                    }}
                                />
                            </Box>
                            {/* Row 2 */}
                            <Box>
                                <StyledTextField
                                    label="Correo de contacto de la sucursal"
                                    size= 'small'
                                    multiline
                                    maxRows={4}
                                    sx = {{
                                        maxWidth: '400px',
                                        width: '100%'
                                    }}
                                />
                                {/* Dos campos por telefono */}
                                
                                <StyledTextField
                                    label="+569"
                                    size= 'small'
                                    multiline
                                    maxRows={4}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <img src={ChileIcon} />
                                            </InputAdornment>
                                        )
                                    }}
                                    sx = {{
                                        maxWidth: '150px',
                                    }}
                                />
                                <StyledTextField
                                    label="00 000 000"
                                    multiline
                                    maxRows={4}
                                    size= 'small'
                                    sx = {{
                                        maxWidth: '245px',
                                    }}
                                />
                            </Box>
                            {/* Row 3 */}
                            <Box>
                                <StyledTextField
                                    label="Nombre de la Empresa"
                                    size="small"
                                    sx = {{
                                        width: '100%',
                                        maxWidth: '805px'
                                    }}
                                />
                            </Box>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <StyledButton onClick={handleClose}
                        sx = {{
                            height: '42px',
                            width: '370px',
                        }}
                    >Guardar</StyledButton>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default Basic