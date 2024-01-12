import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, CardHeader, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import CardPorcent from './components/cardPorcent';
import BarChart from './components/barChart';
import CircularProgress from '@mui/material/CircularProgress';
//Proptypes
import PropTypes from 'prop-types'
//Routes
import { inputDatsRoutes, indicatorRoutes } from '../../api/config';
import axios from 'axios';
//Redux
import { useSelector } from 'react-redux';
//Icon
import SearchOffIcon from '@mui/icons-material/SearchOff';
import FormulaDialog from './components/formulaDialog';

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

function LastView({ currentIndicator }) {
    console.log("currentIndicator", currentIndicator)
    //Obtain the current year
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [loading, setLoading] = useState(true);
    console.log("currentYear", currentYear)
    const currentBranch = useSelector((state) => state.user.branch)
    //Datos de entrada
    const [inputDats, setInputDats] = useState([]);
    const [indicatorValues, setIndicatorValues] = useState([]);
    //Dialog formula
    const [openFormulaDialog, setOpenFormulaDialog] = useState(false);
    const handleOpenFormulaDialog = () => {
        setOpenFormulaDialog(true);
    }
    const handleCloseFormulaDialog = () => {
        setOpenFormulaDialog(false);
    }

    console.log("indicatorValues", indicatorValues)
    useEffect(() => {
        const url = inputDatsRoutes.getInputDatsByIndicator + currentBranch.id + '/' + currentIndicator.indicator._id;
        console.log(url)
        axios.get(url)
            .then((res) => {
                const inputDats = res.data.inputDats;
                setInputDats(inputDats);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [currentBranch, currentIndicator])
    useEffect(() => {
        setLoading(true);
        //Obtener valores del indicador actual
        let url = indicatorRoutes.getIndicatorValues + '/' + currentBranch.id + '/' + currentIndicator._id + '/' + currentYear;
        // http://localhost:5000/api/indicator/values/6530197508ef83055adffb0d/655b9e24cdde154317288e35/2023
        console.log("url",url)
        axios.get(url)
            .then((res) => {
                console.log("res", res)
                const indicatorValues = res.data.monthValues;
                console.log("indicatorValues", indicatorValues)
                setIndicatorValues(indicatorValues);
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [currentIndicator, currentYear, currentBranch])

    const handleChangeYear = (event) => {
        setCurrentYear(event.target.value);
    }
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
                    {/* Fuentes */}
                    <CardPorcent source={currentIndicator.source}
                        type={currentIndicator.sourceType}
                        metric='Porcentaje de recuperacion real'
                        dats={inputDats}
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
                                        <MenuItem value={2023}>2023</MenuItem>
                                        <MenuItem value={2022}>2022</MenuItem>
                                        <MenuItem value={2021}>2021</MenuItem>
                                        <MenuItem value={2020}>2020</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <BarChartRender dats={indicatorValues} indicatorName={currentIndicator.name} loading={loading} />
                        </CardContent>
                    </Card>
                </Grid>
                <FormulaDialog open={openFormulaDialog} handleClose={handleCloseFormulaDialog} indicator={currentIndicator}></FormulaDialog>
            </Grid>
        </Box>
    )
}

LastView.propTypes = {
    currentIndicator: PropTypes.object.isRequired,
}

export default LastView