import { Box, InputLabel, Stack, TextField, Typography, Button } from "@mui/material"
import { styled } from "styled-components"
import { useState } from "react"

const StyledCard = styled(Box)`
    height: 100%;
    max-height: calc(100vh - 100px);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    border: 1px solid #989898;
    background: #F1F1F1;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    padding: 4% 7%;
    overflow-y: auto;
    &:hover{
        background: ${props => props.color};
        cursor: pointer;
        transform: scale(1.04);
        transition: 0.5s;
    }
    display: flex;
    flex-direction: column;
    gap: 5px;
`
// linear-gradient(270deg, #00B971 0%, #0DFF6E 100%);

const StyledImg = styled.img`
    margin-bottom: 10px;
`
const StyledButton = styled(Button)`
    && {
        background-color: #AAA;
        color: white;
        padding: 2% 10%;
        font-size: small;
        font-weight: bold;
        ${StyledCard}:hover & {
            background: ${props => props.type};
        }
    }
`
function Card({title, icon, color}) {
    const srcWhite = icon.replace('Black', 'White');
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }
    const handleMouseLeave = () => {
        setIsHover(false);
    }
    return (
        <StyledCard color={color}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  >
            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
            >

                <StyledImg src={isHover ? srcWhite : icon} alt={title} />
                <Typography variant='h5' color='#1E1E1E' fontWeight={'bold'} textTransform={"uppercase"} >
                    {title}
                </Typography>
            </Box>
            {/* Formulario */}
            <Box>
                <Stack  spacing={1}>
                    <Box>
                        <InputLabel htmlFor="typeSource"
                            sx = {{
                                marginBottom: '5px',
                                color: 'rgba(30, 30, 30, 1)',
                                fontWeight: '600',
                            }}
                        >
                            Tipo fuente
                        </InputLabel>
                        <TextField id="typeSource" variant="outlined" fullWidth  size="small" label='Info'
                            sx = {{
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid #DDD',
                                background: '#FFF',
                            }}
                        />
                    </Box>
                    <Box>
                        <InputLabel htmlFor="emisionSource"
                            sx = {{
                                marginBottom: '5px',
                                color: 'rgba(30, 30, 30, 1)',
                                fontWeight: '600',
                            }}
                        >
                            Fuente de emisión
                        </InputLabel>
                        <TextField id="emisionSource" variant="outlined" fullWidth  size="small" label='Info'
                            sx = {{
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid #DDD',
                                background: '#FFF',
                            }}
                        />
                    </Box>
                    <Box>
                        <InputLabel htmlFor="detailSource"
                            sx = {{
                                marginBottom: '5px',
                                color: 'rgba(30, 30, 30, 1)',
                                fontWeight: '600',
                            }}
                        >
                            Detalle fuente
                        </InputLabel>
                        <TextField id="detailSource" variant="outlined" fullWidth  size="small" label='Info'
                            sx = {{
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid #DDD',
                                background: '#FFF',
                            }}
                        />
                    </Box>
                    <Box>
                        <InputLabel htmlFor="cantidadSource"
                            sx = {{
                                marginBottom: '5px',
                                color: 'rgba(30, 30, 30, 1)',
                                fontWeight: '600',
                            }}
                        >
                            Cantidad
                        </InputLabel>
                        <TextField id="cantidadSource" variant="outlined" fullWidth  type="number" size="small" label='Info'
                            sx = {{
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid #DDD',
                                background: '#FFF',
                            }}
                        />
                    </Box>
                    <Box>
                        <InputLabel htmlFor="unidadSource"
                            sx = {{
                                marginBottom: '5px',
                                color: 'rgba(30, 30, 30, 1)',
                                fontWeight: '600',
                            }}
                        >
                            Unidad
                        </InputLabel>
                        <TextField id="unidadSource" variant="outlined" fullWidth  type="number" size="small" label='Info'
                            sx = {{
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid #DDD',
                                background: '#FFF',
                            }}
                        />
                    </Box>
                    <Box>
                        <InputLabel htmlFor="linkSource"
                            sx = {{
                                marginBottom: '5px',
                                color: 'rgba(30, 30, 30, 1)',
                                fontWeight: '600',
                            }}
                        >
                            Documentos de respaldo
                        </InputLabel>
                        <TextField id="linkSource" variant="outlined" fullWidth  type="file" size="small" 
                            sx = {{
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid #DDD',
                                background: '#FFF',
                            }}
                        />
                        <TextField id="linkSource" variant="outlined" fullWidth  type="file" size="small" 
                            sx = {{
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid #DDD',
                                background: '#FFF',
                            }}
                        />
                        <TextField id="linkSource" variant="outlined" fullWidth  type="file" size="small" 
                            sx = {{
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid #DDD',
                                background: '#FFF',
                            }}
                        />
                    </Box>
                </Stack>
            </Box>
            {/* Botones */}
            <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}
            >
                <StyledButton
                    type = {'#333'} 
                >
                    Limpiar
                </StyledButton>
                <StyledButton
                    type = {'linear-gradient(270deg, #00B971 0%, #0DFF6E 100%)'}
                >
                    Enviar
                </StyledButton>
            </Box>
        </StyledCard>
    )
}

export default Card
