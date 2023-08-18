import { Box, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from "@mui/material"

function Security() {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      padding={'1.5rem'}
    >
      <Typography variant={'h5'} textTransform={"uppercase"} fontWeight={700}>
        Inicio de Sesión
      </Typography>
      <Divider 
        sx = {{
          backgroundColor: '#989898',
          height: '1px',
        }}
      />
      <Box
        sx = {{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '1rem',
            marginBottom: '1.5rem',
        }}      
      >
        <Box
            display={'flex'}
            flexDirection={'column'}
            sx = {{
                marginBottom: '1.5%',
            }}
        >
            <span
                style={{
                    fontWeight: 'bold',
                }}
            >
                Restablecer contraseña 
            </span>
            <span>
                Recupera el acceso a tu cuenta mediante el restablecimiento de tu contraseña.
            </span>
        </Box>
        <Box
            display={'flex'}
            flexDirection={'column'}
        >
            <span
                style={{
                    fontWeight: 'bold',
                }}
            >
                Guardar información de inicio de sesión
            </span>
            <span>
                Almacena de forma segura tus datos de inicio de sesión para un acceso rápido y conveniente a tu cuenta.
            </span>
        </Box>
      </Box>
      <Typography variant={'h5'} textTransform={"uppercase"} fontWeight={700}>
        Otras sesiones
      </Typography>
      <Divider 
        sx = {{
          backgroundColor: '#989898',
          height: '1px',
        }}
      />
      <Box
        sx = {{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '1rem',
            marginBottom: '1.5rem',
        }}      
      >
        <span style={{marginBottom: '1.5%'}}  >Windows PC: Rancagua, Chile </span>
        <span>MaciOS: Santiago, Chile </span>
      </Box>
      <Typography variant={'h5'} textTransform={"uppercase"} fontWeight={700}>
        Configuración de seguridad adicional
      </Typography>
      <Divider 
        sx = {{
          backgroundColor: '#989898',
          height: '1px',
        }}
      />
      <Box
        sx = {{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '1rem',
        }}      
      >
        <Box
            display={'flex'}
            flexDirection={'column'}
            marginBottom={'1.5%'}
        >
            <span
                style={{
                    fontWeight: 'bold',
                }}
            >
                Alertas de inicio de sesión no reconocidos
            </span>
            <span>
                Recibe notificaciones instantáneas sobre cualquier intento de inicio de sesión desde dispositivos o navegadores no reconocidos, garantinzando la seguridad de tu cuenta. 
            </span>
        </Box>
        <Box
            display={'flex'}
            flexDirection={'column'}
        >
            <span>
                Noticaremos cualquier inicio de sesión desde un dispositivo o navegador que no utilices.
            </span>
        </Box>
      </Box>
    </Box>
  )
}

export default Security