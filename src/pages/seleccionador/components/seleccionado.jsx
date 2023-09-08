import {useRef,  useEffect, useState} from 'react'

import './../css/seleccionado.css'
import {H4, HR} from "../styles/Seleccionado";
//Styles from material ui
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext, tokens } from "../../../theme";
import { Typography } from '@mui/material';

function Seleccionado({currentIndicator, setCurrentIndicator}) {
    // const [seleccionado, setSeleccionado] = useState('AMBIENTAL');

    const refBotones = useRef();
    // const refLinea = useRef();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [color, setColor] = useState(colors.primary[500]);
    const removeActive = () =>{
        refBotones.current.childNodes.forEach((e)=>{
            e.classList.remove('active')
        })
        // refLinea.current.className = '';
    }
    const changeSeleccionado = (e) => {
        if (!e.target.className.includes('active')) {
            setCurrentIndicator(e.target.innerText);
            removeActive();
            e.target.classList.add('active');
            if (e.target.className.includes('economico')) {
                setColor(colors.economico[500]);
            }
            else if (e.target.className.includes('social')) {
                setColor(colors.social[500]);
            }
            else{
                setColor(colors.primary[500]);
            }
            // refLinea.current.className = 'linea-'+e.target.innerText.toLowerCase();
        }
    }
    //Setear actual configuracion activa}
    useEffect(() => {
        refBotones.current.childNodes.forEach((e)=>{
            if (e.innerText === currentIndicator) {
                e.classList.add('active');
                // refLinea.current.className = 'linea-'+e.innerText.toLowerCase();
            }
        })
    },[])
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                width: '100%',
            }}
        >
            <Typography variant= 'h4'>
                {currentIndicator}
            </Typography>
            <Divider 
                sx={{
                    width: '100%',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    borderRadius: '20px 20px 0px 0px',
                    border: '1px solid '+color,
                    background: color,
                }}
            />
            <Box
                ref={refBotones}
                sx = {{
                    display: 'flex',
                    flexDirection: 'row',
                    marginY: '1%',
                    width: '100%',
                    gap: '1%',
                }}
                >
                <button className="boton ambiental" onClick={changeSeleccionado}>AMBIENTAL</button>
                <button className="boton economico" onClick={changeSeleccionado}>ECONÓMICO</button>
                <button className="boton social" onClick={changeSeleccionado}>SOCIAL</button>
            </Box>
        </Box>
    )
}

export default Seleccionado