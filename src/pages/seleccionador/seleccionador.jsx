//Bibliotecas
import { useEffect, useState } from 'react'
//Styles
import Grid from '@mui/material/Grid';
import { Box, Typography, Stack, Divider } from '@mui/material';
import { Card, CardContent, CardHeader } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
//Recursos
import { datos, tiposAmbiental, tiposEconomico, tiposSocial, datosGeneral } from './constants/datos';

//Define a card view using material ui
import Indicador from './components/indicador';
import Seleccionado from './components/seleccionado';
import IndicadorTipo from './components/indicadorTipo';
import Filters from './components/filters';
import IndicadorValor from './components/indicadorValor';
import CardPorcent from './components/cardPorcent';
import BarChart from './components/barChart';
import PieChart from './components/pieChart';

function Main({ currentView, setCurrentView }) {
    //Hystory
    const [hystory, setHystory] = useState('');
    //Current view change to drill Component    
    const [currentIndicator, setCurrentIndicator] = useState("AMBIENTAL");
    //La idea es definir aca los tipos que se vayan seleccionando en la segunda vista
    const [currentType, setCurrentType] = useState([]);
    const handleHystory = (e) => {
        setHystory(e.target.value);
    }
    
    useEffect(() => {
        
    },[])

    if (currentView == 0) {
        return (
            <Stack
                direction={'column'}
                paddingTop={2}
                spacing={6}
            >
                <Typography variant="h4" component="h2" fontWeight={'700'} >
                    ¿QUE TIPO DE INDICADOR QUIERES CONOCER?
                </Typography>
                <Grid
                    container
                    direction='row'
                    spacing={1}
                >
                    <Grid item xs={12} sm={6} md={4} lg={4}
                    >
                        <Indicador descripcion={datos[0].descripcion}
                            imagen={datos[0].imagen}
                            imagenHover={datos[0].imagenHover}
                            titulo={datos[0].titulo}
                            setCurrentView={setCurrentView}
                            currentIndicator={currentIndicator}
                            setCurrentIndicator={setCurrentIndicator} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Indicador descripcion={datos[1].descripcion}
                            imagen={datos[1].imagen}
                            imagenHover={datos[1].imagenHover}
                            titulo={datos[1].titulo}
                            setCurrentView={setCurrentView}
                            currentIndicator={currentIndicator}
                            setCurrentIndicator={setCurrentIndicator} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Indicador descripcion={datos[2].descripcion}
                            imagen={datos[2].imagen}
                            imagenHover={datos[2].imagenHover}
                            titulo={datos[2].titulo}
                            setCurrentView={setCurrentView}
                            currentIndicator={currentIndicator}
                            setCurrentIndicator={setCurrentIndicator} />
                    </Grid>
                </Grid>
            </Stack>
        )
    }
    else if (currentView == 1) {
        return (
            <Grid
                container
                rowSpacing={{
                    xs: 2,
                    sm: 2,
                    md: 1,
                    lg: 0,
                }}
                columnSpacing={0}
            >
                <Grid
                    item
                    xs={12}
                >
                    <Seleccionado currentIndicator={currentIndicator} setCurrentIndicator={setCurrentIndicator} />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Grid
                        container
                        direction='row'
                        justifyContent='flex-start'
                        rowSpacing={{
                            xs: 1,
                            sm: 2,
                            md: 2,
                            lg: 2,
                        }}
                        columnSpacing={{
                            xs: 4,
                            sm: 4,
                            md: 9,
                            lg: 10,
                            xl: 22,
                        }}
                    >
                        {tiposAmbiental.map((indicador, index) => {
                            return <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={4}
                                key={index}
                            >
                                <IndicadorTipo nombre={indicador.nombre} descripcion={indicador.descripcion} imagen={indicador.imagen}
                                    setCurrentView={setCurrentView} currentIndicator={currentIndicator} setCurrentIndicator={setCurrentIndicator}
                                    currentType={currentType} setCurrentType={setCurrentType} />
                                {/* <Indicador nombre={indicador.nombre} descripcion={indicador.descripcion} imagen={indicador.imagen}
                                    setCurrentView={setCurrentView} currentIndicator={currentIndicator} setCurrentIndicator={setCurrentIndicator}
                                    currentType={currentType} setCurrentType={setCurrentType} /> */}
                            </Grid>
                        })}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
    else if (currentView == 2) {
        return (
            <Grid
                container
                rowSpacing={1}
            >
                <Grid
                    item
                    xs={12}
                >
                    <Filters tiposAmbiental={tiposAmbiental} tiposEconomico={tiposEconomico} tiposSocial={tiposSocial} 
                        currentType={currentType} setCurrentType={setCurrentType} 
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Grid
                        container
                        direction='row'
                        justifyContent='flex-start'
                        rowSpacing={{
                            xs: 1,
                            sm: 2,
                            md: 2,
                            lg: 2,
                            xl: 2,
                        }}    
                        columnSpacing={{
                            xs: 4,
                            sm: 4,
                            md: 9,
                            lg: 10,
                            xl: 15,
                        }}
                    >   
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <IndicadorValor setCurrentView={setCurrentView} datos={datosGeneral[0]} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <IndicadorValor setCurrentView={setCurrentView} datos={datosGeneral[1]} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <IndicadorValor setCurrentView={setCurrentView} datos={datosGeneral[2]} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <IndicadorValor setCurrentView={setCurrentView} datos={datosGeneral[3]} calc='true' />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
    else if (currentView == 3) {
        return (
            <Box
                display='flex'
                flexDirection='column'
                alignContent='flex-start'
            >
                <Typography variant="h4" component="h2"fontWeight={'bold'}>
                    PORCENTAJE CIRCULARIDAD DE SALIDA
                </Typography>
                <Divider
                    sx={{
                        width: '100%',
                        height: '1px',
                        marginTop: '1%',
                        background: '#989898',
                        border: '1px solid #989898',
                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}
                ></Divider>
                <Grid container
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}

                    marginTop='2%'
                >
                    <Grid item xs={6} 
                        style = {{
                            display: 'flex',
                        }}
                    >
                        {/* Fuentes */}
                        <CardPorcent source='CTI'
                            type='Flujos'
                            metric='Porcentaje de recuperacion real'
                            dats={{
                                'residuosTotales': 89
                            }}
                            form='ax+by+c'
                        >
                        </CardPorcent>

                    </Grid>
                    <Grid item xs={6}>
                        {/* Graficos */}
                        <Card
                            sx={{
                                borderRadius: '10px',
                                border: '1px solid #989898',
                                background: '#FFF',
                                boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.25)',
                                textAlign: 'center',
                                height: '100%',
                            }}

                        >
                            <CardHeader
                                title='COMPORTAMIENTO HISTORICO'
                                titleTypographyProps= {{
                                    variant: 'h4',
                                    fontWeight: 'bold',
                                }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        width: '60%',
                                        margin: 'auto',
                                        marginY: '0%',
                                    }}
                                >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Año Histórico</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={hystory}
                                            label="Historia"
                                            onChange={handleHystory}
                                        >
                                            <MenuItem value={2023}>2023</MenuItem>
                                            <MenuItem value={2022}>2022</MenuItem>
                                            <MenuItem value={2021}>2021</MenuItem>
                                            <MenuItem value={2020}>2020</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Box>
                                <Box
                                    height='200px'
                                    width='100%'
                                >
                                    <BarChart></BarChart>
                                </Box>
                                <Box
                                    display='flex'
                                    flexDirection='row'
                                    width='100%'
                                    height='100%'
                                    marginTop={5}
                                    flexWrap={'wrap'}
                                >
                                    <Box
                                        flexGrow={1}
                                    >
                                        <PieChart  porcentaje={15} tipo={'SOCIAL'} />
                                    </Box>
                                    <Box
                                        flexGrow={1}
                                    >
                                        <PieChart  porcentaje={67} tipo={'AMBIENTAL'} />
                                    </Box>
                                    <Box
                                        flexGrow={1}
                                    >
                                        <PieChart  porcentaje={67} tipo={'ECONOMICO'} />
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Main