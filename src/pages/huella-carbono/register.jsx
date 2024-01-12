import { Box, IconButton, Typography, Stack, Grid } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
//Iconos de la card
import emisionDirecta from '../../assets/register/emisionDirectaBlack.svg';
import emisionIndirecta from '../../assets/register/emisionIndirectaBlack.svg';
import otraDirectas from '../../assets/register/otraDirectasBlack.svg';
import Card from './card';
//Proptype
import PropTypes from 'prop-types';

const cardRegister = [
    {
        title: 'Emisión Directa',
        icon: emisionDirecta,
        color: 'linear-gradient(180deg,rgba(33, 147, 216, 1), rgba(14, 109, 209, 1))'
    },
    {
        title: 'Emisión Indirecta',
        icon: emisionIndirecta,
        color: 'linear-gradient(180deg, #F9D93D 0%, #FFB200 100%)'
    },
    {
        title: 'Otra E.Indirectas',
        icon: otraDirectas,
        color: 'linear-gradient(180deg, #0DFF6E 0%, #00B971 50%, #00945E 100%)'
    }
]

function Register({ companyInfo }) {
    return (
        <div className='animate__animated animate__fadeIn'>
            <main className='lg:col-span-12 xl:col-span-12 h-[100vh] mx-4 md:mx-8 py-2 '>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'flex-start'}
                >
                    <Stack direction={'row'} spacing={2}
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant='h4' color='#1E1E1E' fontWeight={'bold'} >
                            Registro mensual
                        </Typography>
                        <IconButton size='small' >

                            <InfoOutlinedIcon style={{
                                color: "#00b971",
                                width: '31px',
                                height: '31px',
                            }} />
                        </IconButton>
                        <IconButton
                            size='small'
                            style={{
                                background: "#00b971",
                            }}
                        >
                            <SettingsIcon
                                style={{
                                    color: 'rgba(255, 255, 255, 1)',
                                }} />
                        </IconButton>
                    </Stack>
                    <Box
                        marginTop={2}
                        sx={{
                            width: '100%',
                            height: '100%',
                        }}
                    >   
                        <Grid container
                            rowSpacing={2}
                            // Define a column spacing to use always all the space
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            {/* Center the grid item */}
                            <Grid item xs ={12} sm={6} md ={4}>
                                <Box display={'flex'} justifyContent={'flex-start'}>
                                    <Card title={cardRegister[0].title} icon={cardRegister[0].icon} color={cardRegister[0].color} />
                                </Box>
                            </Grid>
                            <Grid item xs ={12} sm={6} md ={4}>
                                <Box display={'flex'} justifyContent={'center'}>
                                    <Card title={cardRegister[1].title} icon={cardRegister[1].icon} color={cardRegister[1].color} />
                                </Box>
                            </Grid>
                            <Grid item xs ={12} sm={6} md ={4}>
                                <Box display={'flex'} justifyContent={'flex-end'}>
                                    <Card title={cardRegister[2].title} icon={cardRegister[2].icon} color={cardRegister[2].color} />
                                </Box>
                            </Grid>
                            {/* {cardRegister.map((card, index) => {
                                return <Grid item xs={12} sm={4} md={4} lg={4} key={index}>
                                    <Box display={'flex'} justifyContent={'center'}>
                                        <Card title={card.title} icon={card.icon} color={card.color} />
                                    </Box>
                                </Grid>
                            })} */}
                        </Grid>
                    </Box>
                </Box>
            </main>
        </div>
    )
}

//Company info is missing in the proptypes
Register.propTypes = {
    companyInfo: PropTypes.object.isRequired,
}

export default Register