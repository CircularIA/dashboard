import { CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { Card } from "@mui/material"
import { useState } from "react"

//PropTypes
import PropTypes from 'prop-types'

function IndicadorTipo({ nombre, descripcion, imagen, setCurrentView, currentCategorie, setCurrentType }) {

  const [hover, setHover] = useState(false)
  const handleHoverColor = () => {
    if (currentCategorie === 'ECONÓMICO') {
      return '#F3A430'
    } else if (currentCategorie === 'SOCIAL') {
      return '#2D7DD2'
    } else if (currentCategorie === 'AMBIENTAL') {
      return '#00B971'
    }
  }
  const nextView = () => {
    setCurrentType([nombre.toLowerCase()])
    setCurrentView((e) =>
      e + 1
    )
  }

  return (
    <Card
      sx={{
        height: '100%',
        width: '100%',
        background: hover ? handleHoverColor() : '#FFFFFF',
      }}
      onClick={nextView}
      onPointerEnter={() => {
        setHover(true)
      }}
      onPointerLeave={() => {
        setHover(false)
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingY: hover ? '0%' : '10%',  
        }}
      >
        <CardHeader
          title={nombre}
          sx={{
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1.35rem',
          }}
        />
        <CardMedia
          component='img'
          image={imagen}
          sx={{
            maxWidth: '89px',
            maxHeight: '89px',
            width: '100%',
            height: '100%',
            
          }}
        />
        {
          hover && (
            <CardContent>
              <Typography gutterBottom variant="h7" component="div" color={'#FFF'} >
                {descripcion}
              </Typography>
            </CardContent>
          )
        }
      </CardActionArea>
    </Card>
  )
}

IndicadorTipo.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  setCurrentView: PropTypes.func.isRequired,
  currentCategorie: PropTypes.string.isRequired,
  currentType: PropTypes.string.isRequired,
  handleCurrentType: PropTypes.func.isRequired,
  setCurrentType: PropTypes.func.isRequired,
}

export default IndicadorTipo