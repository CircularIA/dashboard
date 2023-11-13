import { useState } from 'react';
import { Stack } from '@mui/material';
import Seleccionador from './seleccionador.jsx';
import Footer from './footer.jsx';

function Main() {
    const [currentView, setCurrentView] = useState(0);

    return (
        <main className='lg:col-span-10 xl:col-span-11 h-[100vh] px-8 py-5'>
            <Stack
                direction={'column'}
                sx={{
                    background: '#F2F2F2',
                    height: '100%',
                    
                }}
                spacing={5}
            >
                <Seleccionador currentView={currentView} setCurrentView={setCurrentView} />
                <Footer currentView={currentView} setCurrentView={setCurrentView} />
            </Stack>
        </main>

    )
}

export default Main