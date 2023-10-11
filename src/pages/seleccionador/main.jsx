import { useState } from 'react';
import { Grid, Stack } from '@mui/material';
import Seleccionador from './seleccionador.jsx';
import Footer from './footer.jsx';
import Sidebar from '../../components/Sidebar.jsx';

function Main() {
    const [currentView, setCurrentView] = useState(0);

    return (
        <div className='grid lg:grid-cols-11 xl:grid-cols-12 h-screen w-screen'>
            <Sidebar />
            <main className='lg:col-span-10 xl:col-span-11 h-[100vh] px-8 py-5 overflow-y-scroll'>
                <Stack
                    direction={'column'}
                    sx = {{
                        background: '#F2F2F2',
                    }}
                    spacing={4}
                >
                    <Seleccionador currentView={currentView} setCurrentView={setCurrentView} />
                    <Footer currentView={currentView} setCurrentView={setCurrentView} />
                </Stack>
            </main>
        </div> 
    )
}

export default Main