import { useEffect, useState } from "react";
import { Box, Grid, IconButton, TextField, Typography, InputAdornment, Select, MenuItem} from "@mui/material"
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import ChileIcon from './../../assets/chile.svg';

import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//Form components
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

import {styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
//Redux
import { useSelector } from 'react-redux';

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

function Basic({companyInfo}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () =>{
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    //Redux
    const currentBranch = useSelector((state) => state.user.branch)
    //Set a loading variable to change to true when the data is loaded
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (Object.keys(companyInfo).length > 0) {
            setLoading(true);
        }
    }, [companyInfo])

    console.log("company info", companyInfo)
    return (
        <Box
            width = {'100%'}
            height={'max-content'}
            display={'flex'}
            flexDirection={'column'}
            padding={'1%'}
        >
            <Grid container >
                <Grid item xs={5} sm={4} md={3} lg={3} xl={3}
                    sx = {{
                        display: 'flex',
                        alignItems: 'start',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}
                >
                    <Stack  spacing={6} 
                        sx = {{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {
                            loading ? 
                            <Typography variant='h4' color='#000' fontWeight={'bold'}>
                                {companyInfo.companies.name}
                            </Typography> : <Skeleton variant="text" width={200} />
                        }
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
                        <StyledButton component="label" variant="contained" size="large" sx = {{ width: '170px', height: '50px'}}>
                            Cargar Imagen
                            <input type="file" hidden />
                        </StyledButton>
                    </Stack>
                </Grid>
                <Grid item xs={7} sm={8} md={9} lg={9} xl={9}
                    component={'form'}
                    sx = {{
                        paddingY: '2%',
                        paddingX: '5%',
                        '& .MuiTextField-root': {
                            width: '100%',
                            maxWidth: '351px',
                            margin: '0px 5px 10% 0px',
                        }
                    }}
                >
                    {/* Row 1 */}
                    <Box>
                        {
                            loading ? <StyledTextField
                            label="Nombre de la empresa"
                            multiline
                            size= 'small'
                            value={
                                companyInfo.companies.name
                            }
                            /> : <Skeleton variant="text" width={200} />
                        }
                        {
                            loading ? <StyledTextField
                            label="Sector / Industria"
                            multiline
                            size= 'small'
                            value = {
                                companyInfo ? companyInfo.companies.typeIndustry : <Skeleton variant="text" width={200} />
                            }
                            /> : <Skeleton variant="text" width={200} />
                        }
                    </Box>
                    {/* Row 2 */}
                    <Box>
                        {
                            loading ? 
                            <StyledTextField
                                label="Telefono"
                                multiline
                                size= 'small'  
                                value = {
                                    companyInfo.companies.phone
                                }
                            /> : <Skeleton variant="text" width={200} />
                        }
                        {
                            loading ? <StyledTextField
                            label="Tamaño de la empresa"
                            multiline
                            size= 'small'
                            value= {
                                companyInfo.companies.size
                            }
                            /> : <Skeleton variant="text" width={200} />
                        }
                        
                    </Box>
                    {/* Row 3 */}
                    <Box>
                        {
                            loading ? 
                            <StyledTextField
                                label="Region"
                                multiline
                                size= 'small'
                                value = {
                                    companyInfo.companies.region
                                }
                            /> : <Skeleton variant="text" width={200} />
                        }
                        {
                            loading  ? 
                            <StyledTextField
                                label="Ubicacion"
                                multiline
                                size= 'small'
                                value  = {
                                    companyInfo.companies.address
                                }
                            /> : <Skeleton variant="text" width={200} />
                        }
                    </Box>
                    {/* Row 4  */}
                    <Box>
                        {/* ! Drop down con todas las sucursales, mas una opcion para agregar sucursal */}
                        {
                            loading ? 
                            <StyledTextField
                                label="Sucursal"
                                select
                                multiline
                                size= 'small'
                                value = {
                                    currentBranch ? currentBranch._id : <Skeleton variant="text" width={200} />
                                }
                            >
                                {
                                    companyInfo.companies.branches.map((branch, index) => {
                                        return (
                                            <MenuItem key={index} value={branch._id}>{branch.name}</MenuItem>
                                        )
                                    })
                                }
                            </StyledTextField> : <Skeleton variant="text" width={200} />
                        }
                        <StyledButton onClick={handleClickOpen} variant="contained" size="large" sx = {{ 
                            width: '100%',
                            maxWidth: '351px', 
                            height: '42px'
                        }}>
                            Editar Sucursal
                        </StyledButton>
                    </Box>
                </Grid>
            </Grid>   
            {/* Dialog */}
            <Dialog open={open} onClose={handleClose}
                maxWidth={'lg'}
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
                    <Typography variant='h4' color='#ffff' >
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
                                    maxRows={4}
                                    size= 'small'
                                    sx = {{
                                        maxWidth: '550px',
                                    }}
                                />
                                <StyledTextField
                                    label="Nombre del encargado"
                                    multiline
                                    maxRows={4}
                                    size= 'small'
                                    sx = {{
                                        maxWidth: '550px',
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
                                        maxWidth: '550px',
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
                                        maxWidth: '400px',
                                    }}
                                />
                            </Box>
                            {/* Row 3 */}
                            <Box>
                                {/* Campos que solamente ocupen la mitad de la pantallas */}
                                {/* Numeros */}
                                <StyledTextField
                                    label="Empleados directos"
                                    multiline
                                    maxRows={4}
                                    size= 'small'
                                    sx = {{
                                        maxWidth: '550px',
                                    }}
                                />
                                <StyledTextField
                                    label="Empleados sub-contratados"
                                    multiline
                                    maxRows={4}
                                    size= 'small'
                                    sx = {{
                                        maxWidth: '550px',
                                    }}
                                />
                            </Box>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
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
//Define the proptypes
Basic.propTypes = {
    companyInfo: PropTypes.object.isRequired,
}
Basic.defaultProps = {
    companyInfo: {},
}
export default Basic