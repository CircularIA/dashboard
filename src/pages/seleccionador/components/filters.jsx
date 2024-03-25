import "./../css/filters.css";
import {
	BotonCalcular,
	BotonAmbiental,
	BotonEconomico,
	BotonSocial,
} from "../styles/Seleccionado";
//Recursos

import ImagenCalcular from "../../../assets/Iconos/icon_bar.svg";
import ImagenNoCalcular from "../../../assets/Iconos/icon_hard.svg";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useEffect, useRef } from "react";
//PropTypes
import PropTypes from "prop-types";

function Filters({
	currentCategorie,
	tiposAmbiental,
	tiposEconomico,
	tiposSocial,
	currentType,
	addCurrentType,
	removeCurrentType,
}) {
	const refBotones = useRef();
	useEffect(() => {
		refBotones.current.childNodes.forEach((e) => {
			if (currentType.includes(e.innerText.toLowerCase())) {
				e.classList.add("active");
			} else {
				e.classList.remove("active");
			}
		});
	}, [currentType]);

	const setActiveState = (e) => {
		// e.target.classList.toggle('active');
		//La idea es identificar si ya esta activo el boton
		//Si esta activo, se debe eliminar de la lista
		//Si no esta activo, se debe agregar a la lista
		if (e.target.classList.contains("active")) {
			removeCurrentType(e.target.innerText.toLowerCase());
		} else {
			addCurrentType(e.target.innerText.toLowerCase());
			// setCurrentType((object) =>
			//     [...object, e.target.innerText.toLowerCase()]
			// )
		}
	};
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "start",
				width: "100%",
			}}
		>
			<Box display="flex" flexDirection="row">
				<Typography
					variant="h5"
					sx={{
						marginRight: "90%",
					}}
				>
					INDICADORES
				</Typography>
				<Typography variant="h5">TIPO</Typography>
			</Box>
			<Divider
				sx={{
					width: "100%",
					boxShadow:
						"0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
					borderRadius: "20px 20px 0px 0px",
					border: "1px solid ",
				}}
			/>
			<Box
				ref={refBotones}
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					marginTop: "1%",
					marginBottom: "1%",
					width: "100%",
				}}
			>
				<BotonCalcular onClick={setActiveState}>
					<img src={ImagenCalcular} alt="" />
					Calculado
				</BotonCalcular>
				<BotonCalcular onClick={setActiveState}>
					<img src={ImagenNoCalcular} alt="" />
					No Calculado
				</BotonCalcular>
				{tiposAmbiental.map((indicador, index) => {
					return (
						<BotonAmbiental
							key={index}
							onClick={setActiveState}
							className="boton ambiental"
						>
							{indicador.nombre}
						</BotonAmbiental>
					);
				})}
				{tiposEconomico.map((indicador, index) => {
					return (
						<BotonEconomico
							key={index}
							onClick={setActiveState}
							className="boton economico"
						>
							{indicador.nombre}
						</BotonEconomico>
					);
				})}
				{tiposSocial.map((indicador, index) => {
					return (
						<BotonSocial
							key={index}
							onClick={setActiveState}
							className="boton social"
						>
							{indicador.nombre}
						</BotonSocial>
					);
				})}
			</Box>
		</Box>
	);
}

Filters.propTypes = {
	currentCategorie: PropTypes.string.isRequired,
	tiposAmbiental: PropTypes.array.isRequired,
	tiposEconomico: PropTypes.array.isRequired,
	tiposSocial: PropTypes.array.isRequired,
	tipo: PropTypes.string.isRequired,
	currentType: PropTypes.array.isRequired,
	setCurrentType: PropTypes.func.isRequired,
	addCurrentType: PropTypes.func.isRequired,
	removeCurrentType: PropTypes.func.isRequired,
};

export default Filters;
