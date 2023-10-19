import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from "../../../theme.js";
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from 'styled-components';
//Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CardShadow = styled(CardContent)`
    border-radius: 10px;
    border: 1px solid #989898;
    background: #FFF;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

function createData(name, toneladas) {
    return { name, toneladas };
}

const rows = [
    createData('Residuos generados totales', 159),
    createData('Residuos recuperados biologicos', 237),
    createData('Residuos recuperados técnicos', 262),
];

const styles = {
    rowHeader:{
        fontSize: '1rem',
        color: '#989898',
        fontWeight: '700',
    },
    rowCell: {
        fontSize: '1.2em',
        fontWeight: '400',
    },
    rowCell2: {
        fontSize: '1.2em',
        fontWeight: '300',
        // background: '#00B971',
        // color: '#FFF',
    }
}

function CardPorcent({ source, type, metric, dats, form }) {
    //Styles
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Grid 
        container 
        
        rowSpacing = {{
            xs: 1,
            sm: 2,
            md: 2,
            lg: 2
        }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} >
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    gap={2}
                >
                    <CardShadow
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Typography variant='h3' >
                            Fuente
                        </Typography>
                        <Typography variant='h4' >
                            {source}
                        </Typography>
                    </CardShadow>
                    <CardShadow
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Typography variant='h3' >
                            TIPO
                        </Typography>
                        <Typography variant='h4' >
                            {type}
                        </Typography>
                    </CardShadow>
                </Box>
            </Grid>
            <Grid
                item xs={12}
                
            >
                <CardShadow>
                    <Typography variant='h3' >
                        QUE MIDE
                    </Typography>
                    <Typography variant='h4' >
                        {metric}
                    </Typography>
                </CardShadow>
            </Grid>
            <Grid
                item xs={12}
                
            >
                <CardShadow>
                    <Typography variant='h3' >
                        PORCENTAJE DE RECUPERACIÓN REAL
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table 
                        sx={{ minWidth: 300}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        sx = {
                                            styles.rowHeader
                                        }
                                    >DATOS</TableCell>
                                    <TableCell 
                                        sx = {
                                            styles.rowHeader
                                        }
                                    align="right">UNIDAD</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell 
                                        sx = {
                                            styles.rowCell
                                        }
                                        component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell 
                                        sx = {
                                            styles.rowCell2
                                        }
                                        align="right"
                                        >
                                            {row.toneladas}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* Table */}
                </CardShadow>
            </Grid>
            <Grid 
                item xs={12}
                style = {{
                    alignSelf: 'flex-end',
                }}
            >
                <Button
                    sx={{
                        borderRadius: '10px',
                        background: colors.primary[500],
                        paddingY: '1%',
                        boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.25)',
                        width: '100%', 
                    }}
                >
                    <Typography
                        variant='h2'
                        color='#FFF'
                    >
                        VER FÓRMULA
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

export default CardPorcent