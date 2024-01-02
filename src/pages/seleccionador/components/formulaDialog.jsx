import { useState } from "react";
import { Dialog, DialogTitle, Typography, IconButton, Divider, } from "@mui/material"
import { DialogContent, DialogContentText, DialogActions, Button, Box, InputAdornment } from "@mui/material"
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, Paper } from "@mui/material";

const setFirstLetterToUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const DialogContentIndicator = (indicatorName) => {
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
                                    Val Compostaje + Val Biodigestión + Val Riles * 100
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
                                    (Entrada Residuos + Factor Composición) / 100
                                </Typography>
                            </Box>
                        </Box>
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