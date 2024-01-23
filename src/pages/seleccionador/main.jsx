import { useState } from "react";
import Seleccionador from "./seleccionador.jsx";
import Footer from "./footer.jsx";

function Main() {
	const [currentView, setCurrentView] = useState(0);

	return (
		<div className="animate__animated animate__fadeIn">
			<main className="lg:col-span-10 xl:col-span-11 h-screen px-8 py-5">
				<article className="flex flex-col justify-between h-full">
					<Seleccionador
						currentView={currentView}
						setCurrentView={setCurrentView}
					/>
					<Footer
						currentView={currentView}
						setCurrentView={setCurrentView}
					/>
				</article>
			</main>
		</div>
	);
}

export default Main;
