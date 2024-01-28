import { Box, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
//Date components
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useSelector } from "react-redux";

const AddInput = ({ open, onClose }) => {
	const currentBranch = useSelector((state) => state.user.branch);
	//Enviar los datos al backend
	const handleSubmit = async (event) => {
		event.preventDefault();
	};
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>
				Seleccione el indicado y agregue los datos del dato de entrada
			</DialogTitle>
			<DialogContent>
				<form>
					<Box>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={["DatePicker"]}>
								<DatePicker label="Fecha" />
							</DemoContainer>
						</LocalizationProvider>
					</Box>
					<Box></Box>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancelar</Button>
				<Button onClick={onClose}>Agregar</Button>
			</DialogActions>
		</Dialog>
	);
};

AddInput.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default AddInput;
