import {
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	DialogContentText,
	Box,
	Typography,
	IconButton,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import ChileIcon from "./../../../assets/chile.svg";
import PropTypes from "prop-types";
import SuccessPopupComponent from "../../../components/SuccessPopupComponent";
//Yup and react hook form
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { useCallback } from "react";
//Routes
import { branchRoutes } from "../../../api/config";

const StyledButton = styled(Button)(() => ({
	background:
		"linear-gradient(90deg, #008A55 0%, #06BD60 50.52%, #0DFF6E 100%)",
	borderRadius: "12px",
	color: "#ffff",
	padding: "0px 5% 0px 5%",
}));

const validationSchema = yup.object().shape({
	name: yup.string().required("El nombre de la sucursal es requerido"),
	manager: yup.string().required("El nombre del encargado es requerido"),
	email: yup
		.string()
		.email("El correo debe ser valido")
		.required("El correo es requerido"),
	phone: yup.string().required("El telefono es requerido"),
	address: yup.string().required("La direccion es requerida"),
});

const useYupValidationResolver = (validationSchema) =>
	useCallback(
		async (data) => {
			try {
				const values = await validationSchema.validate(data, {
					abortEarly: false,
				});

				return {
					values,
					errors: {},
				};
			} catch (errors) {
				return {
					values: {},
					errors: errors.inner.reduce(
						(allErrors, currentError) => ({
							...allErrors,
							[currentError.path]: {
								type: currentError.type ?? "validation",
								message: currentError.message,
							},
						}),
						{}
					),
				};
			}
		},
		[validationSchema]
	);

function DialogEditBranch({ open, handleClose, selectedBranch }) {
	//Cookies
	const [cookies] = useCookies(["access_token"]);
	//States
	const [showPopup, setShowPopup] = useState(false);
	//Form
	const resolver = useYupValidationResolver(validationSchema);
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver,
	});

	const onSubmit = (data) => {
		//Transform data of manager
		const manager = {
			name: data.manager,
		};
		data.manager = manager;
		const url = branchRoutes.updateBranch + selectedBranch._id;
		//Axios put with headers
		axios
			.patch(url, data, {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + cookies.access_token,
				},
			})
			.then((res) => {
				console.log(res.data);
				setShowPopup(true);
				setTimeout(() => {
					handleClose();
					setShowPopup(false);
				}, 2000);
			})
			.catch((err) => {
				//Setear una alerta
				console.log(err);
			})
			.finally(() => {
				console.log("finally");
			});
	};
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth={"lg"}
			fullWidth={true}
			sx={{
				"& .MuiDialog-paper": {
					background: "rgba(241, 241, 241, 1)",
				},
			}}
			PaperProps={{
				component: "form",
				onSubmit: handleSubmit(onSubmit),
			}}
		>
			{!showPopup && (
				<DialogTitle
					sx={{
						background:
							"linear-gradient(90deg, #0DFF6E 0%, #00945E 100%)",
						color: "#ffff",
						paddingLeft: "5%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Typography variant="h4" color="#ffff">
						Editar Datos de la Sucursal: {selectedBranch.name}
					</Typography>
					<IconButton onClick={handleClose}>
						<CloseIcon fontSize="large" sx={{ color: "#ffff" }} />
					</IconButton>
				</DialogTitle>
			)}

			<DialogContent>
				{showPopup ? (
					<SuccessPopupComponent message="Los datos de la sucursal han sido actualizados exitosamente." />
				) : (
					<section className="flex flex-col sm:grid sm:grid-cols-2 gap-4 p-3 w-full h-full">
						<Controller
							name="name"
							control={control}
							defaultValue={selectedBranch.name}
							render={({ field }) => (
								<div>
									<label className="text-sm font-semibold">
										Nombre legal de la sucursal
									</label>
									<input
										{...field}
										className="border rounded w-full border-gray-300"
										placeholder="Nombre de la sucursal"
										type="text"
									/>
									{errors.name && (
										<Typography variant="body2" color="red">
											{errors.name.message}
										</Typography>
									)}
								</div>
							)}
						/>
						<Controller
							name="manager"
							control={control}
							defaultValue={selectedBranch.manager.name}
							render={({ field }) => (
								<div>
									<label className="text-sm font-semibold">
										Nombre del encargado
									</label>
									<input
										{...field}
										className="border rounded w-full border-gray-300"
										placeholder="Nombre del encargado"
										type="text"
									/>
									{errors.manager && (
										<Typography variant="body2" color="red">
											{errors.manager.message}
										</Typography>
									)}
								</div>
							)}
						/>
						<Controller
							name="email"
							control={control}
							defaultValue={selectedBranch.email}
							render={({ field }) => (
								<div>
									<label className="text-sm font-semibold">
										Correo de contacto de la sucursal
									</label>
									<input
										{...field}
										className="border rounded w-full border-gray-300"
										placeholder="Correo de contacto de la sucursal"
										type="email"
									/>
									{errors.email && (
										<Typography variant="body2" color="red">
											{errors.email.message}
										</Typography>
									)}
								</div>
							)}
						/>
						<Controller
							name="phone"
							control={control}
							defaultValue={selectedBranch.phone}
							render={({ field }) => (
								<div>
									<label className="text-sm font-semibold">
										Telefono
									</label>
									<input
										{...field}
										className="border rounded w-full border-gray-300"
										placeholder="Telefono"
									/>
									{errors.phone && (
										<Typography variant="body2" color="red">
											{errors.phone.message}
										</Typography>
									)}
								</div>
							)}
						/>
						<Controller
							name="address"
							control={control}
							defaultValue={selectedBranch.address}
							render={({ field }) => (
								<div>
									<label className="text-sm font-semibold">
										Direccion
									</label>
									<input
										{...field}
										className="border rounded w-full border-gray-300"
									/>
									{errors.address && (
										<Typography variant="body2" color="red">
											{errors.address.message}
										</Typography>
									)}
								</div>
							)}
						/>
					</section>
				)}
				{/* Form with Tailwind*/}
			</DialogContent>
			{!showPopup && (
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<StyledButton type="submit">Guardar</StyledButton>
				</DialogActions>
			)}
		</Dialog>
	);
}

DialogEditBranch.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func,
	selectedBranch: PropTypes.object,
};

export default DialogEditBranch;
