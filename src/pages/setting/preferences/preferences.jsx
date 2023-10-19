
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { Box, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from "@mui/material"

function Preferences() {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      padding={'1.1rem'}
    >
      <Typography variant={'h5'} textTransform={"uppercase"} fontWeight={700}>
        Frecuencias de correos electrónicos
      </Typography>
      <Divider 
        sx = {{
          backgroundColor: '#989898',
          height: '1px',
        }}
      />
      <FormControl 
        sx = {{
          marginTop: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <FormGroup>
          <Box
            sx = {{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: '1%',
            }}
          >
            <span>Todas: Recibe todas las notificaciones de actividad de tu cuenta y de nuestra parte, a que menos que las desactives</span>
            <FormControlLabel 
              control = {
                <Checkbox />
              }
              // label= 'Todas: Recibe todas las notificaciones de actividad de tu cuenta y de nuestra parte, a que menos que las desactives'
              // labelPlacement="start"
            />
          </Box>
          <Box
            sx = {{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: '1%',
            }}          
          >
            <span>Sugerencias: Notificaciones prioritarias que consideramos importantes, a menos que las desactives.</span>
            <FormControlLabel 
              control = {
                <Checkbox />
              }
              // label= 'Sugerencias: Notificaciones prioritarias que consideramos importantes, a menos que las desactives.'
              // labelPlacement="start"
            />
          </Box>
          <Box
            sx = {{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <span>Solo las necesarias: Únicamente notificaciones relacionadas con tu cuenta, seguridad y privacidad</span>
            <FormControlLabel 
              control = {
                <Checkbox />
              }
              // label= 'Solo las necesarias: Únicamente notificaciones relacionadas con tu cuenta, seguridad y privacidad'
              // labelPlacement="start"
            />
          </Box>
        </FormGroup>
      </FormControl>
      <Typography variant={'h5'} textTransform={"uppercase"} fontWeight={700}>
        Correos electrónicos
      </Typography>
      <Divider 
        sx = {{
          backgroundColor: '#989898',
          height: '1px',
        }}
      />
      <FormControl
        sx = {{
          marginBottom: '1.5rem',
        }}
      >
        <FormGroup>
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            sx = {{
              marginTop: '1%',
              marginBottom: '1%',
            }}
          >
            <span>Correos electrónicos de Aviso de Actividad</span>
            <FormControlLabel 
              control = {
                <Switch />
              }
              // label= 'Correos electrónicos de Aviso de Actividad'
              // labelPlacement="start"
            />
          </Box>
          <Box
            sx = {{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <span>Correos electrónicos de Recordatorios</span>
            <FormControlLabel 
              control = {
                <Switch />
              }
              // label= 'Correos electrónicos de Recordatorios'
              // labelPlacement="start"
            />
          </Box>
        </FormGroup>
      </FormControl>
      <Typography variant={'h5'} textTransform={"uppercase"} fontWeight={700}>
        Notificaciones
      </Typography>
      <Divider 
        sx = {{
          backgroundColor: '#989898',
          height: '1px',
        }}
      />
      <FormControl>
        <FormGroup>
          <Box
            sx = {{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '1%',
              marginBottom: '1%',
            }}
          >
            <span>Correos electrónicos de Aviso de Actividad</span>
            <FormControlLabel 
              control = {
                <Switch />
              }
              // label= 'Correos electrónicos de Aviso de Actividad'
              // labelPlacement="start"
            />
          </Box>
          <Box
            sx = {{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <span>Correos electrónicos de Recordatorios</span>
            <FormControlLabel 
              control = {
                <Switch />
              }
              // label= 'Correos electrónicos de Recordatorios'
              // labelPlacement="start"
            />
            
          </Box>
        </FormGroup>
      </FormControl>
    </Box>
  )
}

export default Preferences