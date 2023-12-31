import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import { TabPanel } from '@mui/lab';

import { useState } from "react";
import {styled } from '@mui/material/styles';

//Components
import Basic from './basic';
import Preferences from "./preferences/preferences";
import Security from "./security/security";
import Pay from "./pay/pay";
import Interface from "./interface/interface";

const StylesTabs = styled(TabList)(({ theme }) => ({
    '.MuiTabs-flexContainer': {
        justifyContent: 'flex-start',
        width: '100%',
        maxWidth: '1080px',   
    },
    [theme.breakpoints.down('xl')]: {
        variant: 'scrollable',
        scrollButtons: 'auto',
        allowScrollButtonsMobile: true,
    }
}));

const StyledTab = styled(Tab)(({ theme, isLastTab}) => ({
    background: 'rgba(241, 241, 241, 1)',
    border: '1px solid #989898',
    boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px 10px 0px 0px',
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '1em',
    lineHeight: 'normal',
    width: '90%',
    maxWidth: '200px',
    
    [theme.breakpoints.up('lg')]: {
        '&.Mui-selected': {
            background: 'rgba(6, 189, 96, 1)',
            margin: isLastTab ? '0px 0px 0px 23%' : '0px 23% 0px 0px',
            color: '#ffff',
            //Define specific styles for the selected tab
        }
    },
    [theme.breakpoints.down('md')]: {
        '&.Mui-selected': {
            background: 'rgba(6, 189, 96, 1)',
            margin: isLastTab ? '0px 0px 0px 13%' : '0px 13% 0px 0px',
            color: '#ffff',
            //Define specific styles for the selected tab
        }
    },
}));

const StyledPanel = styled(TabPanel)(() => ({
    background: 'rgba(241, 241, 241, 1)',
    borderRadius: '10px',
    height: '90%',
    border: '1px solid #989898',
    boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.25)',
    
}));

function Setting() {
    const [currentView, setCurrentView] = useState('1');
    
    const handleChange = (event, newValue) => {
        setCurrentView(newValue);
    };

    return (
        <div className='animate__animated animate__fadeIn flex grid lg:grid-cols-11 xl:grid-cols-12 h-screen w-screen'>
            <main className='lg:col-span-10 xl:col-span-11 h-[100vh] px-8 py-5'>
                <TabContext value={currentView} >
                    <StylesTabs onChange={handleChange} centered 
                        variant="scrollable"
                        scrollButtons={false}
                    >
                        <StyledTab label='Básico' value='1'/>
                        <StyledTab label='Preferencias' value='2' />
                        <StyledTab label='Seguridad' value='3'/>
                        <StyledTab label='Pago' value='4'/>
                        <StyledTab label='Interfaz' value = '5' isLastTab={true}/>
                    </StylesTabs>
                    <StyledPanel value='1' index={0}>
                        <Basic />
                    </StyledPanel>
                    <StyledPanel value='2' index={1}>
                        <Preferences />
                    </StyledPanel>
                    <StyledPanel value='3' index={2}>
                        <Security />
                    </StyledPanel>
                    <StyledPanel value='4' index={3}>
                        <Pay />
                    </StyledPanel>
                    <StyledPanel value='5' index={4} last='last'>
                        <Interface />
                    </StyledPanel>
                </TabContext>
            </main>
        </div>
    )
}

export default Setting