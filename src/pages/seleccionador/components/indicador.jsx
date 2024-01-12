import { Card, CardContent, Typography } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Box, Stack } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';

//PropTypes
import PropTypes from 'prop-types';

const Indicador = ({ titulo, descripcion, imagen,imagenHover, setCurrentView, currentCategorie, handleCurrentCategorie }) => {
    const [hover, setHover] = useState(false)

    const handleHoverColor = () => {
        console.log(titulo)
        if (titulo == 'AMBIENTAL'){
            return '#00B971'
        } else if (titulo == 'SOCIAL'){
            return '#2D7DD2'
        } else if (titulo == 'ECONÓMICO'){
            return '#F3A430'
        }
    }
    const nextView = () => {
        setCurrentView((e) => e + 1)
        handleCurrentCategorie(titulo)
    }
    return (
        <Stack
            direction={'column'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Card
                sx={{
                    height: '100%',
                    background: hover ? handleHoverColor() : '#FFFFFF',
                    width: '70%',
                }}
                onPointerEnter={()  => {
                    setHover(true)
                }}
                onPointerLeave={() => {
                    setHover(false)
                }}
            >
                <CardActionArea onClick={nextView} currentindicator={currentCategorie}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        paddingY: hover ? '10%' : '24%',  
                    }}
                >
                    <CardMedia
                        component="img"
                        image={hover ? imagenHover : imagen}
                        sx={{
                            maxWidth: '180px',
                            maxHeight: '180px',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    {
                        hover && (
                            <CardContent
                                sx={{
                                    maxWidth: '370px',
                                    maxHeight: '420px',
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <Typography gutterBottom variant="h7" component="div" color={'#FFF'} >
                                    {descripcion}
                                </Typography>
                            </CardContent>
                        )
                    }
                </CardActionArea>
            </Card>
            <Box
                sx={{
                    marginTop: '8%',
                }}
            >
                <Typography gutterBottom variant="h5" component="div">
                    {titulo}
                </Typography>
            </Box>

        </Stack>
    )
}

Indicador.propTypes = {
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
    imagen: PropTypes.string.isRequired,
    imagenHover: PropTypes.string.isRequired,
    setCurrentView: PropTypes.func.isRequired,
    currentCategorie: PropTypes.string.isRequired,
    handleCurrentCategorie: PropTypes.func.isRequired,
}

Indicador.defaultProps = {
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    nombre: ''
}

export default Indicador