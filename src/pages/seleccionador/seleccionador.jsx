//Bibliotecas
import { useEffect, useState } from 'react'
import axios from 'axios';
//Styles
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//Recursos
import { datos, tiposAmbiental, tiposEconomico, tiposSocial} from './constants/datos';
//Redux
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
//Define a card view using material ui
import Indicador from './components/indicador';
import Seleccionado from './components/seleccionado';
import IndicadorTipo from './components/indicadorTipo';
import Filters from './components/filters';
import IndicadorValor from './components/indicadorValor';
//View component
import LastView from './lastView';
//API
import { indicatorRoutes } from '../../api/config';
//PropTypes
import PropTypes from 'prop-types';


const typesCategories = (currentCategorie, setCurrentView,setCurrentType) => {
    if (currentCategorie === 'ECONÓMICO') {
        return (
            tiposEconomico.map((indicador, index) => {
                return <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    key={index}
                >
                    <IndicadorTipo nombre={indicador.nombre} descripcion={indicador.descripcion} imagen={indicador.imagen}
                        setCurrentView={setCurrentView} currentCategorie={currentCategorie} setCurrentType={setCurrentType} />
                </Grid>
            })
        )
    } else if (currentCategorie === 'SOCIAL') {
        return (
            tiposSocial.map((indicador, index) => {
                return <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    key={index}
                >
                    <IndicadorTipo nombre={indicador.nombre} descripcion={indicador.descripcion} imagen={indicador.imagen}
                        setCurrentView={setCurrentView} currentCategorie={currentCategorie} setCurrentType={setCurrentType} />
                </Grid>
            })
        )
    } else if (currentCategorie === 'AMBIENTAL') {
        return (
            tiposAmbiental.map((indicador, index) => {
                return <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    key={index}
                >
                    <IndicadorTipo nombre={indicador.nombre} descripcion={indicador.descripcion} imagen={indicador.imagen}
                        setCurrentView={setCurrentView} currentCategorie={currentCategorie} setCurrentType={setCurrentType} />
                </Grid>
            })
        )
    }
}

function Main({ currentView, setCurrentView}) {
    //Cookies
    const [cookies] = useCookies(['access_token']);
    //Redux
    const currentBranch = useSelector((state) => state.user.branch)
    const [indicators, setIndicators] = useState([]);
    const [filteredIndicators, setFilteredIndicators] = useState([]);
    //Actual indicador
    const [currentIndicator, setCurrentIndicator] = useState({});
    const handleCurrentIndicator = (selectedOption) => {
        setCurrentIndicator(indicators[selectedOption])
    }
    //Current view change to drill Component    
    const [currentCategorie, setCurrentCategorie] = useState("AMBIENTAL"); //AMBIENTAL, ECONOMICO, SOCIAL
    const handleCurrentCategorie = (selectedOption) => {
        setCurrentCategorie(selectedOption)
    }
    const [currentType, setCurrentType] = useState([]); //Tipo de indicador (Flujos, emisiones, energia)
    //Current states
    const addCurrentType = (selectedOption) => {
        setCurrentType([...currentType, selectedOption])
    }
    const removeCurrentType = (selectedOption) => {
        setCurrentType(currentType.filter((type) => type !== selectedOption))
    }

    console.log("indicators", indicators)
    useEffect(() => {
        const url = indicatorRoutes.getIndicators + currentBranch.id;
        axios.get(url,{
            headers: {
                Authorization: `Bearer ${cookies.access_token}`
            }
        }).then((response) => {
            console.log("response", response.data)
            setIndicators(response.data.branchIndicators.indicators)
            setFilteredIndicators(response.data.branchIndicators.indicators)
        }).catch((error) => {
            console.log(error)
        })
    },[currentBranch, cookies.access_token])
    
    //Filter indicators
    useEffect(() => {
        console.log(indicators)
        let filtered = indicators.filter((indicator) => {
            //Filtrar por categoria y tipo
            console.log("indicator", indicator)
            //Filtrar con minusculas sensibles
            console.log("currentCategorie", currentCategorie)
            console.log("currentType", currentType)
            console.log(indicator.indicator.sourceType)
            //No ser sensible a tildes
            if (currentType.length > 0) {
                return (indicator.indicator.categorie.toLowerCase() === currentCategorie.toLowerCase() && currentType.includes(indicator.indicator.sourceType))
            } else {
                return (indicator.indicator.categorie.toLowerCase() === currentCategorie.toLowerCase())
            }
        })
        setFilteredIndicators(filtered)
    },[currentCategorie, currentType, indicators])
    console.log("filteredIndicators", filteredIndicators)
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
                            currentCategorie={currentCategorie}
                            handleCurrentCategorie={handleCurrentCategorie} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Indicador descripcion={datos[1].descripcion}
                            imagen={datos[1].imagen}
                            imagenHover={datos[1].imagenHover}
                            titulo={datos[1].titulo}
                            setCurrentView={setCurrentView}
                            currentCategorie={currentCategorie}
                            handleCurrentCategorie={handleCurrentCategorie} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Indicador descripcion={datos[2].descripcion}
                            imagen={datos[2].imagen}
                            imagenHover={datos[2].imagenHover}
                            titulo={datos[2].titulo}
                            setCurrentView={setCurrentView}
                            currentCategorie={currentCategorie}
                            handleCurrentCategorie={handleCurrentCategorie} />
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
                    <Seleccionado currentCategorie={currentCategorie} setCurrentCategorie={setCurrentCategorie} />
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
                        {typesCategories( currentCategorie, setCurrentView, setCurrentType)}
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
                        currentType={currentType} setCurrentType={setCurrentType} addCurrentType={addCurrentType} removeCurrentType={removeCurrentType} 
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
                        {filteredIndicators.map((indicador, index) => {
                            return <Grid
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                lg={6}
                                key={index}
                            >
                                <IndicadorValor  datos={indicador.indicator} setCurrentView={setCurrentView} setCurrentIndicator={handleCurrentIndicator} index={index}/>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
    else if (currentView == 3) {
        return (
            <LastView currentIndicator={currentIndicator} />
        )
    }
}

//PropTypes
Main.propTypes = {
    currentView: PropTypes.number.isRequired,
    setCurrentView: PropTypes.func.isRequired,
}

export default Main