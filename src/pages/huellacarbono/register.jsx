import { Box, IconButton, Typography, Stack, useTheme, Grid } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import {tokens} from '../../theme';
//Iconos de la card
import emisionDirecta from '../../assets/register/emisionDirectaBlack.svg';
import emisionIndirecta from '../../assets/register/emisionIndirectaBlack.svg';
import otraDirectas from '../../assets/register/otraDirectasBlack.svg';
import Card from './card';
import Sidebar from '../../components/Sidebar.jsx';

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

function Register() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div className='flex grid lg:grid-cols-11 xl:grid-cols-12 h-screen w-screen'>
            <Sidebar />
            <main className='lg:col-span-10 xl:col-span-11 h-[100vh] overflow-y-scroll'>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'flex-start'}
                    sx = {{
                        width: '100%',
                        height: '100%',
                        paddingY: '1%',
                        paddingX: '2%',
                    }}
                >
                    <Stack direction={'row'} spacing={2} 
                        sx = {{
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant='h4' color='#1E1E1E' fontWeight={'bold'} >
                            Registro Mensual
                        </Typography>
                        <IconButton  size='small' >
                            
                            <InfoOutlinedIcon style = {{
                                color: colors.primary[500],
                                width: '31px',
                                height: '31px',
                            }} />
                        </IconButton>
                        <IconButton
                            size='small'
                            style = {{
                                background: colors.primary[500],
                            }}
                        >
                            <SettingsIcon
                            style = {{
                                color: 'rgba(255, 255, 255, 1)',
                            }} />
                        </IconButton>
                    </Stack>
                    <Box
                        marginTop={1}
                        boxSizing={'border-box'}
                    >
                        <Grid container
                            rowSpacing={2}
                            columnSpacing={{
                                xs: 1,
                                sm: 2,
                                md: 6,
                                lg: 12,
                                xl: 15,
                            }}
                        >
                            {cardRegister.map((card, index) => {
                                return <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                                    <Card title={card.title} icon={card.icon} color={card.color} />
                                </Grid>
                            })}
                        </Grid>
                    </Box>
                </Box>
            </main>
        </div>
    )
}

export default Register