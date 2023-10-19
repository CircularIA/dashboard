import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material"
import { useState } from "react"
import Slider from '@mui/material/Slider';
import {styled } from '@mui/material/styles';

const StyledSlider = styled(Slider)(({ theme }) => ({
    // #00B971
    ".MuiSlider-colorPrimary": {
        color: '#00B971',
    },
    ".MuiSlider-thumb": {
        color: '#00B971',
    },
    ".MuiSlider-track": {
        color: '#00B971',  
    },
    ".MuiSlider-rail": {
        color: '#333',
        backgroundColor: '#333',
    },
    ".MuiSlider-mark": {
        width: '16px',
        height: '15px',
        borderRadius: '50%',
        backgroundColor: '#333',
        transform: 'translateX(-50%) translateY(-50%)',
    },
    ".MuiSlider-markActive": {
        backgroundColor: '#00B971',
    }
}));

function Interface() {
    const [language, setLanguage] = useState('');

    return (
        <Box display={'flex'} flexDirection={'column'} padding={'4%'} 
            width={'100%'}
            height={'100%'}
            gap={'3rem'}
        >
            <Box
                display={'flex'}
                width={'100%'}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    flexGrow={1}
                    paddingRight={'8%'}
                >
                    <Typography variant={'h5'} textTransform={"uppercase"} fontWeight={700}>
                        Color
                    </Typography>
                    <Divider />
                    <Stack spacing={4} sx ={{
                        marginTop: '1rem',
                    }} >
                        <span>Modo claro</span>
                        <span>Modo Oscuro</span>
                        <span>Automático</span>
                    </Stack>
                </Box>
                <Divider orientation="vertical"/>
                <Box
                    sx = {{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        paddingLeft: '8%',
                    }}
                >
                    <Typography variant={'h5'} textTransform={"uppercase"} fontWeight={700}>
                        Idiomas
                    </Typography>
                    <Divider />
                    <Box
                        width={'100%'}
                        marginTop={'1rem'}
                    >
                        <FormControl fullWidth>
                            <InputLabel id='select-label'  >
                                Español Latinoamericano
                            </InputLabel>
                            <Select
                                labelId='select-label'
                                value={language}
                                label='Español Latinoamericano'
                                onChange={(e) => setLanguage(e.target.value)}
                                sx = {{
                                    background: '#fff',
                                }}
                            >
                                <MenuItem value={'es'}>Español Latinoamericano</MenuItem>
                                <MenuItem value={'en'}>English</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
            >
                <Typography variant={'h5'} textTransform={"uppercase"} fontWeight={700}>
                    Tamaño de la fuente
                </Typography>
                <Box
                    sx = {{
                        width: '100%',
                        marginTop: '7%',
                    }}
                >   
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                    >
                        <span style = {{fontSize:'14px'}} >aA</span>
                        <span style = {{fontSize: '26px'}} >aA</span>
                    </Box>
                    <StyledSlider
                        aria-label="Temperature"
                        defaultValue={30}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={70}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Interface