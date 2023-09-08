import { useState } from 'react';
import { Grid } from '@mui/material';
import Seleccionador from './seleccionador.jsx';
import Footer from './footer.jsx';
import Sidebar from '../../components/Sidebar.jsx';

function Main() {
    const [currentView, setCurrentView] = useState(0);

    return (
        <div className='flex grid lg:grid-cols-11 xl:grid-cols-12 h-screen w-screen'>
            <Sidebar />
            <main className='lg:col-span-10 xl:col-span-11 h-[100vh] px-8 py-5'>
                <Grid
                    container
                    padding='1% 2% 0% 4%'
                    spacing={1}
                    sx={{
                        background: '#F2F2F2',
                        
                    }}
                >
                    <Grid
                        item xs={12}
                    >
                        <Seleccionador currentView={currentView} setCurrentView={setCurrentView} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <Footer currentView={currentView} setCurrentView={setCurrentView} />
                    </Grid>
                </Grid>
            </main>
        </div> 
    )
}

export default Main