import CardView from './../styles/Card.js'
import { Box } from '@mui/material';

function Indicador({ nombre, descripcion, imagen, titulo = '', setCurrentView, currentIndicator, setCurrentIndicator, currentType, setCurrentType }) {
  const nextView = () => {
    setCurrentView((e) =>
      e + 1
    )
    if (titulo) {
      setCurrentIndicator(titulo.toUpperCase())
    } else{
      setCurrentType((e) =>
        //Necesito agregar un valor a la lista definida en el useState
        [...e, nombre.toLowerCase()]
      )
    }
  }
  const currentHeight = nombre ? '100%' : '420px';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '370px',
        maxHeight: '420px',
        width: '100%',
        height: currentHeight,
      }}
    >
      <CardView onClick={nextView} nombre={nombre} currentindicator={currentIndicator}>
        <CardView.Header nombre={nombre} > {nombre}</CardView.Header>
        <CardView.Body>
          <CardView.Img src={imagen} nombre={nombre}></CardView.Img>
          <CardView.Text nombre={nombre} titulo={titulo} >{descripcion}</CardView.Text>
        </CardView.Body>
      </CardView>
      <CardView.Footer nombre={nombre} titulo={titulo} >{titulo}</CardView.Footer>
    </Box>
  )
}

Indicador.defaultProps = {
  descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  nombre: ''
}
export default Indicador