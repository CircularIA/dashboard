import {useRef,  useEffect, useState} from 'react'

import './../css/seleccionado.css'
//Styles from material ui
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
//Styled components
import styled from 'styled-components';

function Seleccionado({currentIndicator, setCurrentIndicator}) {
    // const [seleccionado, setSeleccionado] = useState('AMBIENTAL');

    const refBotones = useRef();
    // const refLinea = useRef();

    const [color, setColor] = useState('#00B971');
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
                setColor('#F3A430');
            }
            else if (e.target.className.includes('social')) {
                setColor('#2D7DD2');
            }
            else{
                setColor('#00B971');
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
                    <StyledButton className="boton ambiental" onClick={changeSeleccionado}>AMBIENTAL</StyledButton>
                    <StyledButton className="boton economico" onClick={changeSeleccionado}>ECONÓMICO</StyledButton>
                    <StyledButton className="boton social" onClick={changeSeleccionado}>SOCIAL</StyledButton>
            </Box>
        </Box>
    )
}

export default Seleccionado


const StyledButton = styled(Button)`
    background-color: '#FFF';
    padding: 0.4% 3% 0.4% 3%;
    border-radius: 0.9rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: start;
    background-color: white;
    color: black;
    border: 2px solid;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-align: center;
    font-size: 1.25rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`