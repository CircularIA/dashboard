//MUI
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { tokens } from "../../../theme";

import styled from 'styled-components';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#989898',
        borderRadius: 10,
    },
    [`& .${linearProgressClasses.bar}`]: {
        background: "linear-gradient( 90deg, rgba(0, 185, 113, 1),rgba(6, 217, 112, 1), rgba(13, 255, 110, 1))",
        borderRadius: 10,
    },
  }));


function IndicadorValor({ datos, calc, setCurrentView }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    //True es que fue calculado
    const color = calc ? 'linear-gradient( 90deg, rgba(0, 138, 85, 1), rgba(13, 255, 110, 1))' : '#989898';
    const nextView = () =>{
        setCurrentView((e) =>
            e + 1
        )
    }
    return (
        <Card
            onClick={nextView}
            sx = {{
                width: '100%',
                maxWidth: '670px',
                height: '250px',
                fontSize: '1.3rem',
                borderRadius: '10px',
                border: '1px solid #989898',
                background: '#FFF',
                boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.25)',
                
            }}
            
        >
            <CardHeader
                title={datos.nombre}
                titleTypographyProps={{
                    style: {
                        fontSize: '1.1em',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: 'normal'
                    }
                }}
                sx = {{
                    background: color,
                    color: '#FFF',
                    padding: '1%',
                    borderRadius: '10px 10px 0px 0px',
                    textAlign: 'center',
                    height: '30%',
                    textTransform: 'uppercase',
                }}
            >
            </CardHeader>
            <CardContent
                sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'space-around',
                    height: '70%',
                    padding: '3% 5% 5% 5%',
                }}
            >
                <Typography variant='h5'>
                    {datos.descripcion}
                </Typography>
                <Box 
                    sx={{ 
                        width: '100%',
                        marginTop: '5%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        aligContent: 'center',
                        justifyContent: 'flex-end',
                    }}
                >
                    {/* <LinearProgress variant="determinate" value={50} 
                    sx = {{
                        height: '21px',
                    }}
                    /> */}
                    {calc ?
                        <Box
                            sx = {{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {/* <PieChart
                                series = {[
                                    {
                                        arcLabel: (item) => `${item.label}: ${item.value}`,
                                        arcLabelMinAngle: 45,
                                        data,
                                    },
                                ]}
                                sx = {{
                                    [`& .${pieArcLabelClasses.root}`]: {
                                        fill:colors.primary[500],
                                        fontWeight: 'bold',
                                    },
                                }}
                                {...size}
                            >

                            </PieChart> */}
                            <CircularProgress variant="determinate" value={25}
                            size={65}
                            sx = {{
                                background: colors.primary[200],
                                borderRadius: '50%',
                            }}
                            />
                            <Typography
                                variant='h5'
                                position='absolute'
                                color= {colors.primary[500]}
                                fontWeight='bold'
                            >
                                25%
                            </Typography>
                        </Box> 
                    :
                        <BorderLinearProgress 
                        variant="determinate" 
                        value={50} 
                        sx = {{
                            height: '19px'
                        }}
                        />
                    }
                </Box>
            </CardContent>
        </Card>
        // <CardPorcent onClick={nextView} >
        //     <CardPorcent.Header calc={calc}>{datos.nombre}</CardPorcent.Header>
        //     <CardPorcent.Body>
        //         <CardPorcent.Text>
        //             {datos.descripcion}
        //         </CardPorcent.Text>
        //     </CardPorcent.Body>
        // </CardPorcent>
    )
}

export default IndicadorValor