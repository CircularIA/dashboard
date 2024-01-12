import { useState } from 'react';
import Seleccionador from './seleccionador.jsx';
import Footer from './footer.jsx';

function Main() {
    const [currentView, setCurrentView] = useState(0);

    return (
        <main className='lg:col-span-10 xl:col-span-11 h-screen px-8 py-5'>
            <div className='flex flex-col justify-between space-y-1 h-full'>
                <Seleccionador currentView={currentView} setCurrentView={setCurrentView}/>
                <Footer currentView={currentView} setCurrentView={setCurrentView} />
            </div>
        </main>
    )
}


export default Main