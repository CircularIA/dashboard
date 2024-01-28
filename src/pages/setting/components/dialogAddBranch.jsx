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

import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import ChileIcon from "./../../../assets/chile.svg";

import PropTypes from "prop-types";

const StyledTextField = styled(TextField)(() => ({
	background: "#FFF",
	borderRadius: "8px",
	border: "1px solid #BBB",
}));

const StyledButton = styled(Button)(() => ({
	background:
		"linear-gradient(90deg, #008A55 0%, #06BD60 50.52%, #0DFF6E 100%)",
	borderRadius: "12px",
	color: "#ffff",
	padding: "0px 5% 0px 5%",
}));

function DialogAddBranch({ open, handleClose }) {
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
		>
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
					Datos de Sucursal
				</Typography>
				<IconButton onClick={handleClose}>
					<CloseIcon fontSize="large" sx={{ color: "#ffff" }} />
				</IconButton>
			</DialogTitle>
			<DialogContent
				sx={{
					paddingLeft: "5%",
				}}
			>
				{/* Form */}
				<DialogContentText paddingTop={"5%"}>
					<Box
						component={"form"}
						width={"100%"}
						height={"100%"}
						sx={{
							"& .MuiTextField-root": {
								margin: "0px 5px 2% 0px",
								width: "100%",
							},
						}}
					>
						{/* Row 1 */}
						<Box>
							<StyledTextField
								label="Nombre legal de la sucursal"
								multiline
								maxRows={4}
								size="small"
								sx={{
									maxWidth: "550px",
								}}
							/>
							<StyledTextField
								label="Nombre del encargado"
								multiline
								maxRows={4}
								size="small"
								sx={{
									maxWidth: "550px",
								}}
							/>
						</Box>
						{/* Row 2 */}
						<Box>
							<StyledTextField
								label="Correo de contacto de la sucursal"
								size="small"
								multiline
								maxRows={4}
								sx={{
									maxWidth: "550px",
								}}
							/>
							{/* Dos campos por telefono */}

							<StyledTextField
								label="+569"
								size="small"
								multiline
								maxRows={4}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<img src={ChileIcon} />
										</InputAdornment>
									),
								}}
								sx={{
									maxWidth: "150px",
								}}
							/>
							<StyledTextField
								label="00 000 000"
								multiline
								maxRows={4}
								size="small"
								sx={{
									maxWidth: "400px",
								}}
							/>
						</Box>
						{/* Row 3 */}
						<Box>
							{/* Campos que solamente ocupen la mitad de la pantallas */}
							{/* Numeros */}
							<StyledTextField
								label="Empleados directos"
								multiline
								maxRows={4}
								size="small"
								sx={{
									maxWidth: "550px",
								}}
							/>
							<StyledTextField
								label="Empleados sub-contratados"
								multiline
								maxRows={4}
								size="small"
								sx={{
									maxWidth: "550px",
								}}
							/>
						</Box>
					</Box>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancelar</Button>
				<StyledButton
					onClick={handleClose}
					sx={{
						height: "42px",
						width: "370px",
					}}
				>
					Guardar
				</StyledButton>
			</DialogActions>
		</Dialog>
	);
}

DialogAddBranch.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func,
};

export default DialogAddBranch;
