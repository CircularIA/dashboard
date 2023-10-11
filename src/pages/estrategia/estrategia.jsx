import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Card } from '@mui/material'
import { CardMedia } from '@mui/material'
import { CardContent } from '@mui/material'
import { Grid } from '@mui/material'
//Components
import Header from '../../components/Header.jsx'
import Sidebar from '../../components/Sidebar.jsx'
//Images
import Group1 from '../../assets/estrategia/Group1.svg'
import Group2 from '../../assets/estrategia/Group2.svg'
import Group3 from '../../assets/estrategia/Group3.svg'
import Group4 from '../../assets/estrategia/Group4.svg'
import Group5 from '../../assets/estrategia/Group5.svg'
import Group6 from '../../assets/estrategia/Group6.svg'
import Group7 from '../../assets/estrategia/Group7.svg'
import Group8 from '../../assets/estrategia/Group8.svg'
import Group9 from '../../assets/estrategia/Group9.svg'
import Group10 from '../../assets/estrategia/Group10.svg'
import Group11 from '../../assets/estrategia/Group11.svg'
import Group12 from '../../assets/estrategia/Group12.svg'
import Group13 from '../../assets/estrategia/Group13.svg'
import Group14 from '../../assets/estrategia/Group14.svg'
import Group15 from '../../assets/estrategia/Group15.svg'
import Group16 from '../../assets/estrategia/Group16.svg'
import Group17 from '../../assets/estrategia/Group17.svg'
import GroupAmbiental from '../../assets/estrategia/GroupAmbiental.svg'
import GroupSocial from '../../assets/estrategia/GroupSocial.svg'
import GroupEconomico from '../../assets/estrategia/GroupEconomico.svg'
import Group1White from '../../assets/estrategia/Group1white.svg'
import Group2White from '../../assets/estrategia/Group2white.svg'
import Group3White from '../../assets/estrategia/Group3white.svg'
import Group4White from '../../assets/estrategia/Group4white.svg'
import Group5White from '../../assets/estrategia/Group5white.svg'
import Group6White from '../../assets/estrategia/Group6white.svg'
import Group7White from '../../assets/estrategia/Group7white.svg'
import Group8White from '../../assets/estrategia/Group8white.svg'
import Group9White from '../../assets/estrategia/Group9white.svg'
import Group10White from '../../assets/estrategia/Group10white.svg'
import Group11White from '../../assets/estrategia/Group11white.svg'
import Group12White from '../../assets/estrategia/Group12white.svg'
import Group13White from '../../assets/estrategia/Group13white.svg'
import Group14White from '../../assets/estrategia/Group14white.svg'
import Group15White from '../../assets/estrategia/Group15white.svg'
import Group16White from '../../assets/estrategia/Group16white.svg'
import Group17White from '../../assets/estrategia/Group17white.svg'
import {Button} from '@mui/material'
import IndicadorDialog from './indicadorDialog.jsx'

const Images = [
  //Set images of group
  Group1,
  Group2,
  Group3,
  Group4,
  Group5,
  Group6,
  Group7,
  Group8,
  Group9,
  Group10,
  Group11,
  Group12,
  Group13,
  Group14,
  Group15,
  Group16,
  Group17,
]

const WhiteImages = [
  Group1White,
  Group2White,
  Group3White,
  Group4White,
  Group5White,
  Group6White,
  Group7White,
  Group8White,
  Group9White,
  Group10White,
  Group11White,
  Group12White,
  Group13White,
  Group14White,
  Group15White,
  Group16White,
  Group17White,
]

const StyledCard = ({ index, text, type, handleOpen }) => {
  //type ambiental, social, economico
  const [hover, setHover] = useState(false)
  if (type == 'ambiental') {
    return (
      <Card
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
        onClick={() => {
          handleOpen()
        }}
        sx={{
          width: 170,
          height: 170,
          backgroundColor: '#F1F1F1',
          color: 'black',
          borderRadius: '10px',
          ":hover": {
            backgroundColor: '#00B140',
            color: 'white',
          }
        }}>
        <CardMedia
          sx={{
            height: 100,
            width: 100,
            margin: 'auto',
          }}
          image={
            hover ? WhiteImages[index] : Images[index]
          }
          title="Ambiental"
        />
        <CardContent
          sx={{
            paddingY: 1,
            paddingX: 1,
          }}
        >
          {/* Need to center the text of typofgraphy */}
          <Typography variant='h5'
            sx={{
              textAlign: 'center',
            }}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    )
  } else if (type == 'social') {
    return (
      <Card
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
        sx={{
          width: 170, height: 170, backgroundColor: '#F1F1F1', color: 'black', borderRadius: '10px',
          ":hover": {
            backgroundColor: '#0E6DD1',
            color: 'white',
          }
        }}>
        <CardMedia
          sx={{
            height: 100,
            width: 100,
            margin: 'auto',
          }}
          image={
            hover ? WhiteImages[index] : Images[index]
          }
          title="Social"
        />
        <CardContent
          sx={{
            paddingY: 1,
            paddingX: 1,
          }}
        >
          {/* Need to center the text of typofgraphy */}
          <Typography variant='h5'
            sx={{
              textAlign: 'center',
            }}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    )
  } else {
    return (
      <Card
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
        onClick={() => {
          handleOpen()
        }}
        sx={{
          width: 170, height: 170, backgroundColor: '#F1F1F1', color: 'black', borderRadius: '10px',
          ":hover": {
            backgroundColor: '#FFB200',
            color: 'white',
          }
        }}>
        <CardMedia
          sx={{
            height: 100,
            width: 100,
            margin: 'auto',
          }}
          image={
            hover ? WhiteImages[index] : Images[index]
          }
          title="Economico"
        />
        <CardContent
          sx={{
            paddingY: 1,
            paddingX: 1,
          }}
        >
          {/* Need to center the text of typofgraphy */}
          <Typography variant='h5'
            sx={{
              textAlign: 'center',
            }}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

const CardGroup = ({ value, type }) => {
  if (type == 'ambiental') {
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <img src={GroupAmbiental} height={100} width={100} />
        <Button variant="contained" size="lg"
          sx={{
            backgroundColor: '#00B140',
            color: 'white',
            marginTop: 1,
          }}
        >
          {value} / 100
        </Button>
      </Box>
    )
  } else if (type == 'social') {
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <img src={GroupSocial} height={100} width={100} />
        <Button variant="contained" size="lg"
          sx={{
            backgroundColor: '#0E6DD1',
            color: 'white',
            marginTop: 1,
          }}>
          {value} / 100
        </Button>
      </Box>
    )
  } else {
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <img src={GroupEconomico} height={100} width={100} />
        <Button variant="contained" size="lg"
          sx={{
            backgroundColor: '#FFB200',
            color: 'white',
            marginTop: 1,
          }}>
          {value} / 100
        </Button>
      </Box>
    )
  }
}

function Estrategia() {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(Group8White);
  const [ods, setOds] = useState({
    name: "8 - ODS - TRABAJO DECENTE Y CRECIMIENTO ECONÓMICO",
    description: "El ODS 8 busca promover económicamente sostenible e inclusivo, generar empleo y promover el trabajo decente para todos.",
    points: 0,
  })
  const [type, setType] = useState('economico');
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  return (
    <div className='grid lg:grid-cols-11 xl:grid-cols-12 h-screen w-screen'>
      <Sidebar />
      <main className='lg:col-span-10 xl:col-span-11 h-[100vh] overflow-y-scroll'>
        <Header />
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          marginTop={2}
          paddingX={2}
          paddingY={1}
        >
          {/* Container ambiental */}
          <Grid container rowSpacing={4}
          >
            <Grid item xs={12} md={12} lg={12}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <StyledCard index={16} text='Alianzas para lograr los objetivos' type='ambiental' handleOpen={handleOpen} />
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <StyledCard index={13} text={'Vida submarina'} type='ambiental' handleOpen={handleOpen} />
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <StyledCard index={14} text={'Vida de ecosistemas terrestres'} type='ambiental' handleOpen={handleOpen} />
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <CardGroup value={80} type='ambiental' />
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <StyledCard index={5} text={'Agua limpia y saneamiento'} type='ambiental' handleOpen={handleOpen} />
            </Grid><Grid item xs={2} md={2} lg={2}>
              <StyledCard index={12} text={'Acción por el clima'} type='ambiental' handleOpen={handleOpen} />
            </Grid>
          </Grid>
          {/* Container Social */}
          <Grid container rowSpacing={4}>
            {/* Left container */}
            <Grid item xs={4} md={4} lg={4}>
              <Grid container>
                <Grid item xs={6} md={6} lg={6}>
                  <StyledCard index={0} text={'Fin de la pobreza'} type='social' handleOpen={handleOpen} />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <StyledCard index={6} text={'Energía asequible y no contaminante'} type='social' handleOpen={handleOpen} />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <StyledCard index={1} text={'Hambre cero'} type='social' handleOpen={handleOpen} />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <StyledCard index={2} text={'Salud y bienestar'} type='social' handleOpen={handleOpen} />
                </Grid>
              </Grid>
            </Grid>
            {/* Center container */}
            <Grid item xs={4} md={4} lg={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardGroup value={80} type='social' />
            </Grid>
            {/* Right container */}
            <Grid item xs={4} md={4} lg={4}>
              <Grid container>
                <Grid item xs={6} md={6} lg={6}>
                  <StyledCard index={10} text={'Ciudades y comunidades sostenibles'} type='social' handleOpen={handleOpen} />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <StyledCard index={15} text={'Paz, justicia e institución sólidas'} type='social' handleOpen={handleOpen} />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <StyledCard index={3} text={'Educación de calidad'} type='social' handleOpen={handleOpen} />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <StyledCard index={4} text={'Igualdad de género'} type='social' handleOpen={handleOpen} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Container Economico */}
          <Grid container rowSpacing={4}
          >
            <Grid item xs={2} md={2} lg={2}>
              <StyledCard index={7} text={'Trabajo decente y crecimiento económico'} type='economico' handleOpen={handleOpen} />
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <StyledCard index={8} text={'Industria, innovación e infraestructura'} type='economico' handleOpen={handleOpen} />
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <CardGroup value={80} type='economico' />
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <StyledCard index={9} text={'Reducción de las desigualdades'} type='economico' handleOpen={handleOpen} />
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <StyledCard index={11} text={'Producción y consumo responsables'} type='economico' handleOpen={handleOpen} />
            </Grid>
          </Grid>
          {/* Form Dialog */}
          <IndicadorDialog open={open} image={image} ods={ods} type={type} handleClose={handleClose} />
        </Box>
      </main>
    </div>
  )
}

export default Estrategia