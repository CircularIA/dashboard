/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logoVolta from "../assets/volta/logo.jpeg";
import ambiental from "../assets/ambiental.svg";
import social from "../assets/social.svg";
import economic from "../assets/economic.svg";
import substract from "../assets/substract.svg";
import expand from "../assets/expand.svg";
import Valorization from "../components/Valorization";
import Emissions from "../components/Emissions";
import Energy from "../components/Energy";
import Water from "../components/Water";
import SupplyChain from "../components/SupplyChain";
import Social from "../components/Social";
import Economic from "../components/Economic";
//Cookies
import { useCookies } from "react-cookie";
//Components of material ui
import { Skeleton } from "@mui/material";
//Dialog component
const Panel = ({ title, index, handleClick, isExpanded, panelClass }) => (
	<div
		className={`flex mt-4 items-center ${panelClass} custom-shadow justify-between rounded-md shadow-lg p-3 mx-4 md:mx-8`}
	>
		<p className="text-roboto text-sm lg:text-2xl category-panel text-white">
			{" "}
			{title}
		</p>
		<div className="flex items-center">
			<div className="border-l-2 border-gray-300 h-12 mx-4"></div>
			<img
				src={isExpanded ? substract : expand}
				alt="Icon"
				className="w-14 h-14 px-2 cursor-pointer"
				onClick={() => handleClick(index)}
			/>
		</div>
	</div>
);

const panels = [
	{ title: "Valorización de residuos", component: "Valorization" },
	{ title: "Emisiones", component: "Emissions" },
	{ title: "Energía", component: "Energy" },
	{ title: "Agua", component: "Water" },
	{ title: "Cadena de suministros", component: "SupplyChain" },
];

const Dashboard = ({ companyInfo }) => {
	// Configuraciones de tema para el dashboard
	const theme = useSelector((state) => state.theme.theme);
	// Clases basadas en el tema
	const themeClasses = {
		ambiental: {
			gradient: "bg-green-horizontal-gradient",
			dark: "bg-custom-dark-green",
			mid: "bg-custom-mid-green",
		},
		social: {
			gradient: "bg-blue-horizontal-gradient",
			dark: "bg-custom-dark-blue",
			mid: "bg-custom-mid-blue",
		},
		economic: {
			gradient: "bg-orange-horizontal-gradient",
			dark: "bg-custom-dark-orange",
			mid: "bg-custom-mid-orange",
		},
	};
	const { gradient, dark, mid } = themeClasses[theme];

	const panelInfo = {
		ambiental: {
			imgSrc: ambiental,
			title: "PANEL DE CONTROL AMBIENTAL",
		},
		social: {
			imgSrc: social, // Asegúrate de importar o definir la imagen adecuada
			title: "PANEL DE CONTROL SOCIAL",
		},
		economic: {
			imgSrc: economic, // Asegúrate de importar o definir la imagen adecuada
			title: "PANEL DE CONTROL ECONÓMICO",
		},
	};

	const { imgSrc, title } = panelInfo[theme] || panelInfo.ambiental;

	const [activePanels, setActivePanels] = useState([]);
	const handleClick = (index) => {
		if (activePanels.includes(index)) {
			setActivePanels(activePanels.filter((i) => i !== index));
		} else {
			setActivePanels([...activePanels, index]);
		}
	};
	const [animateClass, setAnimateClass] = useState("");
	useEffect(() => {
		setAnimateClass("animate__fadeIn"); // Aplicar la animación en cada cambio de tema

		const timer = setTimeout(() => {
			setAnimateClass(""); // Eliminar la animación después de un período de tiempo
		}, 500); // Ajustar este valor según la duración de la animación

		return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
	}, [theme]);
	const [contentVisible] = useState(true);

	const renderComponent = (componentName, props) => {
		switch (componentName) {
			case "Valorization":
				return <Valorization {...props} />;
			case "Emissions":
				return <Emissions {...props} />;
			case "Energy":
				return <Energy {...props} />;
			case "Water":
				return <Water {...props} />;
			case "SupplyChain":
				return <SupplyChain {...props} />;
			default:
				return null;
		}
	};

	const renderAmbiental = () => {
		return (
			<div>
				{panels.map((panel, index) => (
					<div key={index} className="mb-4">
						<Panel
							title={panel.title}
							icon={panel.icon}
							index={index}
							handleClick={handleClick}
							isExpanded={activePanels.includes(index)}
							panelClass={mid}
						/>
						<div
							className={`expand-collapse-content ${
								activePanels.includes(index) ? "expanded" : ""
							}`}
						>
							{activePanels.includes(index) &&
								contentVisible &&
								renderComponent(panel.component, { theme })}
						</div>
					</div>
				))}
			</div>
		);
	};

	const [cookies, setCookies, removeCookies] = useCookies(["access_token"]);
	// *Configuraciones para saber que sucursal tiene seleccionada el usuario
	const currentBranch = useSelector((state) => state.user.branch.index);
	//Use effect to refresh data of company info
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		if (Object.keys(companyInfo).length > 0) {
			setLoading(true);
		}
	}, [companyInfo]);
	// *Obtener la información de la sucursal actual
	return (
		<div className="animate__animated animate__fadeIn">
			<div
				className={`mt-4 flex items-center ${gradient} custom-shadow justify-between rounded-md shadow-lg p-4 mx-4 md:mx-8`}
			>
				<div className="flex items-center  ">
					<img
						src={logoVolta}
						alt="Logo empresa"
						className="w-[30%] md:p-1 md:ml-4 md:w-[35%] rounded-full"
					/>
					<div className="text-white ml-4 w-[100%] ">
						{" "}
						{/* Aquí está el texto blanco */}
						{loading ? (
							<p className="font-bold mb-3 text-2xl">
								{" "}
								¡Bienvenido! {companyInfo.companies.name}{" "}
								Sucursal:{" "}
								{
									companyInfo.companies.branches[
										currentBranch
									].name
								}
							</p>
						) : (
							<Skeleton variant="text" width={200} height={30} />
						)}
						{loading ? (
							<p>
								Dirección sucursal:{" "}
								{
									companyInfo.companies.branches[
										currentBranch
									].address
								}
							</p>
						) : (
							<Skeleton variant="text" width={200} height={30} />
						)}
						{loading ? (
							<p>
								Encargada:{" "}
								{
									companyInfo.companies.branches[
										currentBranch
									].manager.name
								}
							</p>
						) : (
							<Skeleton variant="text" width={200} height={30} />
						)}
					</div>
				</div>
			</div>
			<div
				className={`flex mt-4 items-center ${dark} custom-shadow justify-start rounded-md shadow-lg mx-4 md:mx-8`}
			>
				<img
					src={imgSrc}
					alt="Icon"
					className="h-[5%] md:h-[8%] lg:h-[7%] p-3 md:p-3"
				/>
				<p className="text-roboto text-sm lg:text-3xl ml-3 title-panel text-white">
					{" "}
					{title}
				</p>
			</div>
			{theme === "ambiental" && contentVisible && renderAmbiental()}
			{theme === "social" && contentVisible && <Social />}
			{theme === "economic" && contentVisible && <Economic />}
		</div>
	);
};

Dashboard.defaultProps = {
	companyInfo: {},
};

export default Dashboard;
