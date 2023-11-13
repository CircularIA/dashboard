
import { Card, CardContent, Typography } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Box, Stack } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
const Indicador = ({ titulo, descripcion, imagen, setCurrentView, currentIndicator, setCurrentIndicator }) => {


    const [hover, setHover] = useState(false)

    const handleHoverColor = () => {
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
        setCurrentIndicator(titulo)
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
                <CardActionArea onClick={nextView} currentindicator={currentIndicator}
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
                        image={imagen}
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











// function Indicador({ nombre, descripcion, imagen, titulo = '', setCurrentView, currentIndicator, setCurrentIndicator, currentType, setCurrentType }) {
//   const nextView = () => {
//     setCurrentView((e) =>
//       e + 1
//     )
//     if (titulo) {
//       setCurrentIndicator(titulo.toUpperCase())
//     } else{
//       setCurrentType((e) =>
//         //Necesito agregar un valor a la lista definida en el useState
//         [...e, nombre.toLowerCase()]
//       )
//     }
//   }
//   const currentHeight = nombre ? '100%' : '420px';
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         maxWidth: '370px',
//         maxHeight: '420px',
//         width: '100%',
//         height: currentHeight,
//       }}
//     >
//       <CardView onClick={nextView} nombre={nombre} currentindicator={currentIndicator}>
//         <CardView.Header nombre={nombre} > {nombre}</CardView.Header>
//         <CardView.Body>
//           <CardView.Img src={imagen} nombre={nombre}></CardView.Img>
//           <CardView.Text nombre={nombre} titulo={titulo} >{descripcion}</CardView.Text>
//         </CardView.Body>
//       </CardView>
//       <CardView.Footer nombre={nombre} titulo={titulo} >{titulo}</CardView.Footer>
//     </Box>
//   )
// }

Indicador.defaultProps = {
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    nombre: ''
}

export default Indicador