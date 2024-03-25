/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import thanks_bg from "../../assets/bg-thanks.svg";
import "./styles/index.css";
import { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import {
	BotonAmbiental,
	BotonEconomico,
	BotonSocial,
} from "./styles/SimuladorStyles";
import {
	tiposAmbiental,
	tiposEconomico,
	tiposSocial,
	opcionesTarjetas,
} from "./constants/datos";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";

// Importaciones necesarias para el calendario y el dropdown
import axios from "axios";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { companyRoutes, inputDatsRoutes } from "../../api/config.js";
import { useCookies } from "react-cookie";
import "react-datepicker/dist/react-datepicker.css";
import { setBranch } from "../../reducers/userSlice";
import { FaRegCalendarAlt } from "react-icons/fa";

function normalizeText(text) {
	return text
		.normalize("NFD") // Normaliza las tildes y otros diacríticos
		.replace(/[\u0300-\u036f]/g, "") // Elimina los diacríticos
		.replace(/[^\w\s]/gi, "") // Elimina los caracteres que no sean alfanuméricos y espacios
		.replace(/\s+/g, " ") // Convierte múltiples espacios en uno solo
		.trim() // Elimina espacios en blanco al inicio y final del texto
		.toLowerCase(); // Convierte a minúsculas
}

const ConfirmationModal = ({ onConfirm, onCancel }) => {
	return (
		// El contenedor exterior es fijo y cubre toda la pantalla
		<div
			className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
			id="my-modal"
		>
			<div
				className="relative custom-shadow bg-white rounded-lg shadow-xl"
				style={{ width: "500px", maxWidth: "90%" }}
			>
				<div className="p-6 text-center">
					<div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
						<svg
							className="h-9 w-9 text-red-600"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M12 8v4m0 4h.01"></path>
							<circle cx="12" cy="12" r="10"></circle>
						</svg>
					</div>
					<h3 className="text-2xl font-bold leading-6 mb-4">
						Confirmar cambios
					</h3>
					<p className="text-gray-500 mb-6">
						¿Estás seguro de que quieres confirmar los cambios? Esta
						acción no se puede deshacer.
					</p>
					<div className="flex justify-center">
						<button
							onClick={onConfirm}
							className="bg-custom-mid-green text-white rounded-lg px-4 py-2 mr-2 hover:bg-custom-light-green focus:outline-none focus:ring-2 focus:ring-red-300"
						>
							Sí, estoy seguro
						</button>
						<button
							onClick={onCancel}
							className="ml-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
						>
							No, cancelar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const Simulador = ({ companyInfo }) => {
	const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
	// Información de la branch actual
	const currentBranch = useSelector((state) => state.user.branch);
	const currentBranchIndex = useSelector((state) => state.user.branch.index);
	const currentCompanyIndex = useSelector((state) => state.user.company.index);
	const [sucursals, setSucursals] = useState([]);
	const [branchIndicators, setBranchIndicators] = useState(null);
	const [inputDats, setInputDats] = useState(null)
	const [loading, setLoading] = useState(false);
	const [selectedDate, setSelectedDate] = useState(new Date()); // Estado para la fecha seleccionada
	const dispatch = useDispatch();
	const datePickerRef = useRef();
	const [showModal, setShowModal] = useState(false);
	const [actionToConfirm, setActionToConfirm] = useState(null);
	// Estado necesario para manejar de forma individual las peticiones
	const [selectedIndicatorId, setSelectedIndicatorId] = useState(null);
	const [nombresSeleccionados, setNombresSeleccionados] = useState({})

	// Añade un estado para almacenar los datos de entrada para cada indicador
	const [inputData, setInputData] = useState({});

	const [indicators, setIndicators] = useState(null);

	const [currentView, setCurrentView] = useState(1);
	const refBotones = useRef();
	const [currentType, setCurrentType] = useState([]);
	useEffect(() => {
		refBotones.current?.childNodes.forEach((e) => {
			// Comprueba si algún objeto en currentType tiene un nombre que coincide con e.innerText
			const isActive = currentType.some(
				(item) => item.nombre === e.innerText
			);
			if (isActive) {
				e.classList.add("active");
			} else {
				e.classList.remove("active");
			}
		});
	}, [currentType]);

	useEffect(() => {
		if (Object.keys(companyInfo).length > 0) {
			console.log("companyInfo", companyInfo);
			console.log(currentBranchIndex)
			console.log(currentCompanyIndex)
			const sucursals = companyInfo.companies[currentCompanyIndex].branches.map(
				(branch, index) => ({
					value: "Sucursal " + index,
					_id: branch._id,
					index: index,
					label: "Sucursal " + branch.name,
				})
			);
			console.log(sucursals);
			setSucursals(sucursals);
			setLoading(true);
		}
	}, [companyInfo]);

	const setActiveState = (e, tipo) => {
		const nombre = e.target.innerText;
		if (e.target.classList.contains("active")) {
			setCurrentType(
				currentType.filter((item) => item.nombre !== nombre)
			);
		} else {
			setCurrentType([...currentType, { nombre, tipo }]);
		}
	};

	const [selecciones, setSelecciones] = useState({});

	const isSeleccionesEmpty = () => {
		return Object.keys(selecciones).length === 0;
	};

	const toggleSeleccion = (tipo, id) => {
		setSelecciones((prevSelecciones) => {
			const updatedSelecciones = { ...prevSelecciones };

			if (updatedSelecciones[tipo] && updatedSelecciones[tipo][id]) {
				delete updatedSelecciones[tipo][id]; // Eliminar la selección si ya estaba marcada
			} else {
				// Agregar la selección si no estaba marcada
				updatedSelecciones[tipo] = {
					...updatedSelecciones[tipo],
					[id]: true,
				};
			}

			// Limpieza de categorías vacías para evitar tener claves sin indicadores seleccionados
			if (
				updatedSelecciones[tipo] &&
				Object.keys(updatedSelecciones[tipo]).length === 0
			) {
				delete updatedSelecciones[tipo];
			}
			return updatedSelecciones;
		});
	};

	const onCalendarIconClick = () => {
		datePickerRef.current.setOpen(true); // Use the `setOpen` method from react-datepicker to open the calendar
	};

	// Función para realizar la petición fetch y actualizar los datos de cada tarjeta
	const fetchInputData = async (branchId, indicatorId, date) => {
		const year = date.getFullYear();
		const month = date.getMonth() + 1; // getMonth devuelve el mes (de 0 a 11), por lo que sumamos 1

		const response = await fetch(
			inputDatsRoutes.getInputDatsByIndicator +
			`/${branchId}/${indicatorId}/${year}/${month}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${cookies.access_token}`,
				},
			}
		);
		if (!response.ok) {
			throw new Error("Hubo un error al obtener los datos de entrada");
		}
		const data = await response.json();
		console.log("data", data);
		console.log("date", date);
		// Si no hay datos, inicializa con la estructura predeterminada sin valores asignados
		if (data.inputDats.length === 0) {
			// Encuentra el indicador por su ID para inicializar sus inputDats
			console.log(branchIndicators)
			const indicator = branchIndicators.indicators.find(
				(ind) => ind.indicator._id === indicatorId
			);
			if (indicator) {
				date.setUTCHours(16, 0, 0, 0);
				const formattedUTCDate = date.toISOString();
				data.inputDats = indicator.inputDats.map((inputDat) => ({
					...inputDat,
					value: undefined,
					date: formattedUTCDate,
				}));
			}
		}

		// Actualiza el estado con los nuevos datos
		setInputData((prevData) => ({
			...prevData,
			[indicatorId]: data.inputDats,
		}));
		console.log(inputData);
	};

	// Efecto que se dispara cuando la sucursal o la fecha cambian
	useEffect(() => {
		if (currentBranch && selectedDate && inputDats) {
			console.log(inputDats)
		}
	}, [currentBranch, selectedDate, inputDats]);

	// Función para actualizar el inputData con los valores modificados
	const handleInputDataUpdate = (indicatorId, dataId, newValue) => {
		console.log(inputData)
		console.log(inputData[0])
		const numericValue = Number(newValue)
		setInputData((prevData) => ({
			...prevData,
			[indicatorId]: prevData[indicatorId].map((data) => {
				if (data._id === dataId) {
					return { ...data, value: numericValue };
				}
				return data;
			}),
		}));


	};

	const handleNextView = () => {
		setCurrentView(currentView + 1);
	};
	const handlePreviousView = () => {
		setCurrentView(currentView - 1);
	};

	// Esta función se llamará cuando se haga clic en el botón "Ingresar Datos"
	const handleUpdateData = async (indicatorId) => {
		try {
			// Encuentra los datos específicos del indicador
			const indicatorData = inputData[indicatorId].filter(data => data.value !== undefined);

			// Asegurar que existen datos
			if (indicatorData.length === 0) {
				console.log("No hay datos para guardar.");
				return;
			}

			// Preparar el cuerpo de la solicitud
			const requestBody = {
				inputDats: indicatorData.map(inputDat => ({
					id: inputDat._id,
					name: inputDat.name,
					value: inputDat.value,
					date: inputDat.date,
					measurement: inputDat.measurement,
				})),
			};
			// Realizar la petición de actualización al servidor
			const response = await fetch(inputDatsRoutes.updateInputDats, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${cookies.access_token}`, // Asegurar de que el token de acceso exista
				},
				body: JSON.stringify(requestBody),
			});

			if (!response.ok) {
				throw new Error("Error al guardar los datos");
			}

			// Respuesta del servidor
			const responseData = await response.json();
			console.log(responseData.message);
			handleNextView();
		} catch (error) {
			console.error("Error al guardar los datos: ", error);
			// Manejar el error, posiblemente mostrar un mensaje al usuario.
		}
	};

	const handleSendData = async (indicatorId) => {
		// Obtener los datos específicos para el indicador
		const specificData = inputData[indicatorId];

		// Verificar que hay datos para enviar
		if (!specificData || specificData.length === 0) {
			console.log("No hay datos para enviar.");
			return;
		}

		// Filtrar los datos para asegurarse de que todos tienen un valor definido
		const dataToSend = specificData.filter(data => data.value !== undefined);

		// Preparar el cuerpo de la solicitud con los datos a enviar
		const requestBody = {
			inputDats: dataToSend.map(data => ({
				id: data._id,
				name: data.name,
				value: data.value,
				date: data.date,
				measurement: data.measurement,
			})),
		};

		// Configurar los headers para la petición, incluyendo el token de autenticación
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${cookies.access_token}`,
			},
		};

		try {
			// Realizar la petición POST para enviar los datos al servidor
			const response = await axios.post(
				`${inputDatsRoutes.registerInputDatsMany}/${currentBranch._id}/${indicatorId}`,
				requestBody,
				config
			);

			// Verificar la respuesta del servidor
			if (response.status === 200) {
				console.log(`Datos enviados con éxito para el indicador ${indicatorId}:`, response.data);
				// Aquí podrías manejar la transición a la siguiente vista o mostrar un mensaje de éxito
			}
		} catch (error) {
			// Manejar cualquier error que ocurra durante la petición
			console.error("Error al enviar los datos:", error);
		}
	};


	const handleModelarClick = async () => {
		console.log("Selecciones hechas", selecciones)
		setNombresSeleccionados(Object.keys(selecciones).reduce((accumulator, categoria) => {
			accumulator[categoria] = opcionesTarjetas[categoria]
				.filter(opcion => selecciones[categoria][opcion.id.toString()])
				.map(opcionSeleccionada => opcionSeleccionada.nombre);
			return accumulator;
		}, {}))
		console.log("Nombres", nombresSeleccionados)
		handleNextView();
	};

	const handleBranchChange = (selectedOption) => {
		dispatch(setBranch(selectedOption));
	};

	// MANEJO DEL MODAL

	const handleSendDataClick = (indicatorId) => {
		setSelectedIndicatorId(indicatorId);
		setActionToConfirm("SEND");
		setShowModal(true);
	};

	const handleConfirm = () => {
		if (actionToConfirm === "UPDATE") {
			handleUpdateData(selectedIndicatorId);
		} else if (actionToConfirm === "SEND") {
			handleSendData(selectedIndicatorId);
		}
		setShowModal(false);
	};

	const handleCancel = () => {
		setShowModal(false);
	};

	return (
		<div className="relative w-[90%] mt-10 mx-auto animate__animated animate__fadeIn">
			<CSSTransition
				in={currentView === 1}
				timeout={600}
				classNames="view-transition"
				unmountOnExit
			>
				<div className="absolute inset-0 transition-all">
					<div className="mt-4 items-center custom-shadow rounded-lg p-4">
						<p className="text-lg">Aspectos a incluir</p>
						<Box
							ref={refBotones}
							sx={{
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								marginTop: "1%",
								width: "100%",
							}}
						>
							{tiposAmbiental.map((indicador, index) => {
								return (
									<BotonAmbiental
										key={index}
										onClick={(e) =>
											setActiveState(e, "ambiental")
										}
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
										onClick={(e) =>
											setActiveState(e, "economico")
										}
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
										onClick={(e) =>
											setActiveState(e, "social")
										}
										className="boton social"
									>
										{indicador.nombre}
									</BotonSocial>
								);
							})}
						</Box>
					</div>

					{/* Secciones de aspectos a incluir */}
					<div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-x-6 gap-y-2">
						{currentType.map((item) => {
							const textColorClass = {
								ambiental: "text-ambiental",
								social: "text-social",
								economico: "text-economico",
							}[item.tipo];
							return (
								<div
									key={item.nombre}
									className="animate__animated animate__fadeIn mt-4 items-center custom-shadow rounded-lg p-3"
								>
									<h3
										className={`text-lg font-semibold mb-2 ${textColorClass}`}
									>
										{item.nombre}
									</h3>
									{opcionesTarjetas[item.nombre]?.map(
										(opcion) => {
											const labelColorClass = selecciones[
												item.nombre
											]?.[opcion.id]
												? `text-${item.tipo}-selected`
												: "";
											return (
												<div
													key={opcion.id}
													className="flex items-center mb-2"
												>
													<input
														type="checkbox"
														id={`${item.nombre.toLowerCase()}-${opcion.id
															}`}
														className={`mr-2 checkbox-custom checkbox-${item.tipo}`}
														checked={
															selecciones[
															item.nombre
															]?.[opcion.id] ||
															false
														}
														onChange={() =>
															toggleSeleccion(
																item.nombre,
																opcion.id
															)
														}
													/>
													<label
														htmlFor={`${item.nombre.toLowerCase()}-${opcion.id
															}`}
														className={
															labelColorClass
														}
													>
														{opcion.nombre}
													</label>
												</div>
											);
										}
									)}
								</div>
							);
						})}
					</div>
					<button
						className="button-text-custom mb-4"
						onClick={handleModelarClick}
						disabled={isSeleccionesEmpty()}
					>
						INGRESO DE DATOS
					</button>
				</div>
			</CSSTransition>

			{currentView === 2 && (
				<CSSTransition
					in={true} // Siempre 'true' porque la renderización ya está controlada por la condición 'currentView === 2'
					timeout={600}
					classNames="view-transition"
					unmountOnExit
				>
					{/* Contenido de currentView === 2 */}
					<div className="absolute inset-0 transition-all">
						<header className="flex flex-col md:flex-row items-center justify-between rounded-md custom-shadow p-4 mb-10">
							<div className="flex items-center justify-center w-full p-2">
								<Select
									options={sucursals}
									//Define as default value the current branch
									value={sucursals[currentBranchIndex]}
									onChange={handleBranchChange}
									className="w-full"
								/>
							</div>
							<div className="flex items-center justify-end w-full p-2">
								<DatePicker
									ref={datePickerRef}
									selected={selectedDate}
									onChange={(date) => setSelectedDate(date)}
									dateFormat="yyyy/MM"
									showMonthYearPicker
									dropdownMode="select"
									className="react-datepicker-custom-input"
								/>
								<FaRegCalendarAlt
									onClick={onCalendarIconClick}
									className="react-datepicker-calendar-icon"
								/>
							</div>
						</header>
						{Object.keys(nombresSeleccionados).map((categoria) => (
							<div key={categoria} className="mt-4 custom-shadow rounded-lg p-4">
								<h2 className="text-xl font-bold mb-4">{categoria}</h2>
								<div className="flex">
									<div className="w-1/2 p-2">
										{nombresSeleccionados[categoria].map((nombre) => (
											<div key={nombre} className="flex flex-col md:flex-row mb-4">
												<div className="w-full mb-2 md:mb-0 md:pr-2">
													<label className="block text-sm font-semibold mb-1" htmlFor={`input-${nombre}`}>{nombre}</label>
													<input
														type="number"
														id={`input-${nombre}`}
														className="block w-full my-2 border rounded"
														placeholder="Valor"
													/>
													<input
														type="text"
														id={`input-${nombre}`}
														className="block w-full my-2 border rounded"
														placeholder="Descripción"
													/>
													<input
														type="text"
														id={`input-${nombre}`}
														className="block w-full my-2 border rounded"
														placeholder="Norma"
													/>
												</div>
											</div>
										))}
									</div>
									<div className="w-1/2 p-2">
										{/* Aquí irían los gráficos en el futuro. Por ahora, podrías colocar un placeholder o dejarlo en blanco. */}
										<div className="w-full h-full bg-gray-100 rounded">
											<p className="text-center text-gray-500 pt-4">Espacio para gráficos</p>
										</div>
									</div>
								</div>
							</div>
						))}

						<button
							className="button-text-custom mb-4 p-4"
							onClick={handleModelarClick}
							disabled={isSeleccionesEmpty()}
						>
							INGRESAR DATOS
						</button>
					</div>
				</CSSTransition>
			)}
			{showModal && (
				<ConfirmationModal
					onConfirm={handleConfirm}
					onCancel={handleCancel}
				/>
			)}
			<CSSTransition
				in={currentView === 3}
				timeout={600}
				classNames="view-transition"
				unmountOnExit
			>
				<div className="flex mt-4 items-center justify-center  custom-shadow rounded-lg mb-10 background-thanks">
					<p className="text-xl sm:text-2xl md:text-5xl text-roboto text-white font-bold mb-20">
						¡Cambios realizados con éxito!
					</p>
					<button
						className="absolute bottom-20 lg:bottom-48 button-login text-sm sm:text-base"
						style={{ width: "50%" }}
						onClick={handlePreviousView}
					>
						Volver atrás
					</button>
				</div>
			</CSSTransition>
		</div>
	);
};

export default Simulador;
