import { useEffect, useState } from 'react'
import { Box, Card, CardContent, CardHeader, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import CardPorcent from './components/cardPorcent';
import BarChart from './components/barChart';
import CircularProgress from '@mui/material/CircularProgress';
//Proptypes
import PropTypes from 'prop-types'
//Routes
import { indicatorRoutes } from '../../api/config';
import axios from 'axios';
//Redux
import { useSelector } from 'react-redux';
//Icon
import SearchOffIcon from '@mui/icons-material/SearchOff';
import FormulaDialog from './components/formulaDialog';
//Cookies
import { useCookies } from 'react-cookie';

const BarChartRender = ({ dats, indicatorName, loading }) => {
    console.log("dats", dats)
    //Verificar si todos los valores son -1
    let allValuesAreNegativeOne = true;
    dats.forEach((dat) => {
        if (dat.value !== -1) {
            allValuesAreNegativeOne = false;
        }
    })
    
    if (loading) {
        return (
            <Box
                height='400px'
                width='100%'
                sx={{
                    marginTop: '7%',
                }}
            >
                <CircularProgress />
            </Box>
        )
    } else if (allValuesAreNegativeOne) {
        return (
            <Box
                height='400px'
                width='100%'
                sx={{
                    marginTop: '7%',
                }}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <SearchOffIcon sx={{ fontSize: 100 }} />
                <Typography variant="h5" component="h2" fontWeight={'bold'}>
                    No hay datos para este año
                </Typography>
            </Box>
        )
    } else {
        return (
            <Box
                height='400px'
                width='100%'
                sx={{
                    marginTop: '2%',
                }}
            >
                <BarChart dats={dats} indicatorName={indicatorName} ></BarChart>
            </Box>
        )
    }
}

const getMenuItemYears =  () => {
    const currentYear = new Date().getFullYear();
    //Get the 10 years before the current year
    let years = [];
    for (let i = 0; i < 10; i++) {
        years.push(currentYear - i);
    }
    return years.map((year, index) => {
        return (
            <MenuItem key={index} value={year}>{year}</MenuItem>
        )
    })
}

function LastView({ currentIndicator }) {
    //Cookies
    const [cookies] = useCookies(['access_token']);
    //Obtain the current year
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const handleChangeYear = (event) => {
        setCurrentYear(event.target.value);
    }
    const [loading, setLoading] = useState(true);
    const currentBranch = useSelector((state) => state.user.branch)
    //Datos de entrada
    const [indicatorValues, setIndicatorValues] = useState([]);
    //Dialog formula
    const [openFormulaDialog, setOpenFormulaDialog] = useState(false);
    const handleOpenFormulaDialog = () => {
        setOpenFormulaDialog(true);
    }
    const handleCloseFormulaDialog = () => {
        setOpenFormulaDialog(false);
    }
    useEffect(() => {
        setLoading(true);
        //Obtener valores del indicador actual
        const url = indicatorRoutes.getIndicatorValues + '/' + currentBranch.id + '/' + currentIndicator.indicator._id + '/' + currentYear;
        // http://localhost:5000/api/indicator/values/6530197508ef83055adffb0d/655b9e24cdde154317288e35/2023
        axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.access_token,
            }
        })
            .then((res) => {
                const indicatorValues = res.data.monthValues;
                setIndicatorValues(indicatorValues);
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [currentIndicator, currentYear, currentBranch, cookies.access_token])

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignContent='flex-start'
        >
            <Typography variant="h5" component="h2" fontWeight={'bold'}>
                {currentIndicator.indicator.name.toUpperCase()}
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
                    style={{
                        display: 'flex',
                    }}
                >
                    <CardPorcent source={currentIndicator.indicator.source}
                        type={currentIndicator.indicator.sourceType}
                        metric='Porcentaje de recuperacion real'
                        dats={currentIndicator.indicator.inputDats}
                        form='ax+by+c'
                        handleOpenFormulaDialog = {handleOpenFormulaDialog}
                        handleClose = {handleCloseFormulaDialog}
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
                            titleTypographyProps={{
                                variant: 'h5',
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
                                        value={currentYear}
                                        label="Historia"
                                        onChange={handleChangeYear}
                                    >
                                        {getMenuItemYears()}
                                    </Select>
                                </FormControl>
                            </Box>
                            <BarChartRender dats={indicatorValues} indicatorName={currentIndicator.name} loading={loading} />
                        </CardContent>
                    </Card>
                </Grid>
                <FormulaDialog open={openFormulaDialog} handleClose={handleCloseFormulaDialog} indicator={currentIndicator.indicator}></FormulaDialog>
            </Grid>
        </Box>
    )
}

LastView.propTypes = {
    currentIndicator: PropTypes.object.isRequired,
}

BarChartRender.propTypes = {
    dats: PropTypes.array.isRequired,
    indicatorName: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default LastView