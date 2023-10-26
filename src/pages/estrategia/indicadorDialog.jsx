import { Dialog, DialogContent, Box, Stack, Grid, Typography, Divider, DialogTitle } from '@mui/material'
import React from 'react'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Group8White from '../../assets/estrategia/Group8white.svg'

function IndicadorDialog({ open, handleClose, ods, image, type }) {
    return (
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth={'md'}
            onClose={handleClose}
        >
            <DialogTitle
                sx={{
                    background: 'linear-gradient(90deg, #0DFF6E 0%, #00945E 100%)',
                    color: '#ffff',
                    paddingLeft: '5%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                }} flex-end
            >
                <IconButton onClick={handleClose}>
                    <CloseIcon fontSize="large" sx={{ color: '#ffff' }} />
                </IconButton>
            </DialogTitle>
            <DialogContent
                sx = {{
                    marginTop: '2%',
                }}
            >
                <Grid container>
                    <Grid item xs={12} md={4}>
                        {/* Aca ira la imagens */}
                        <Box
                            sx={{
                                backgroundColor: '#FFB200',
                                color: 'white',
                            }}
                        >
                            <img src={image} alt="Imagen del indicador" className="w-full h-full object-cover" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        {/* Aca ira la informacion del indicador */}
                        <Stack direction={'column'} spacing={2} className="p-5">
                            <Typography variant={'h4'}>{ods.name}</Typography>
                            <Typography variant={'h5'}>{ods.description}</Typography>
                            {/* Info de indicadores */}
                            <Box
                                display={'flex'}
                                flexWrap={'wrap'}
                                spacing={2}
                            >
                                {/* Comparacion */}
                                <Stack direction={'column'} spacing={1} className="p-1"
                                    flexBasis={'50%'}
                                >
                                    <Typography variant={'h5'}>Comparación</Typography>
                                    <Divider />
                                    <Typography variant={'h5'}  >{ods.points} puntos</Typography>
                                    {/* Barra de progreso */}
                                    {/* Datos a comparar con mes anterior */}
                                    <Typography variant={'h5'}>Comparado con el mes anterior</Typography>
                                </Stack>
                                {/* Indicadores involucrados */}
                                <Stack direction={'column'} spacing={1} className="p-1"
                                    flexBasis={'50%'}>
                                    <Typography variant={'h5'}>Indicadores involucrados</Typography>
                                    <Divider />
                                    {/* Lista de indicadores */}
                                    
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}


IndicadorDialog.defaultProps = {
    ods: {
        name: "8 - ODS - TRABAJO DECENTE Y CRECIMIENTO ECONÓMICO",
        description: "El ODS 8 busca promover económicamente sostenible e inclusivo, generar empleo y promover el trabajo decente para todos.",
        points: 0,
    },
    image: Group8White,
}
export default IndicadorDialog