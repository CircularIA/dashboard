import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "styled-components";
//Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
//Proptypes
import PropTypes from "prop-types";

const CardShadow = styled(CardContent)`
	border-radius: 10px;
	border: 1px solid #989898;
	background: #fff;
	box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

function createData(name, toneladas) {
	return { name, toneladas };
}

const styles = {
	rowHeader: {
		fontSize: "1rem",
		color: "#989898",
		fontWeight: "700",
	},
	rowCell: {
		fontSize: "1.2em",
		fontWeight: "400",
	},
	rowCell2: {
		fontSize: "1.2em",
		fontWeight: "300",
		// background: '#00B971',
		// color: '#FFF',
	},
};

const firstLetterUpper = (string) => {
	//Transform all to lower case and then
	//capitalize first letter
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

function CardPorcent({ source, type, metric, dats, handleOpenFormulaDialog, handleOpenSchemaDialog }) {
	const [rows, setRows] = useState(dats);
	useEffect(() => {
		let aux = [];
		dats.map((dat) => {
			//Push a object with name a measurement
			aux.push(createData(dat.name, dat.measurement));
		});
		setRows(aux);
	}, [dats]);
	return (
		<Grid
			container
			rowSpacing={{
				xs: 1,
				sm: 2,
				md: 2,
				lg: 2,
			}}
			columnSpacing={{ xs: 1, sm: 2, md: 3 }}
		>
			<Grid item xs={12}>
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="space-between"
					gap={2}
				>
					<CardShadow
						sx={{
							flexGrow: 1,
						}}
					>
						<Typography variant="h5" fontWeight={"bold"}>
							Fuente
						</Typography>
						<Typography variant="h5">
							{source.toUpperCase()}
						</Typography>
					</CardShadow>
					<CardShadow
						sx={{
							flexGrow: 1,
						}}
					>
						<Typography variant="h5" fontWeight={"bold"}>
							TIPO
						</Typography>
						<Typography variant="h5">
							{firstLetterUpper(type)}
						</Typography>
					</CardShadow>
				</Box>
			</Grid>
			<Grid item xs={12}>
				<CardShadow>
					<Typography variant="h5" fontWeight={"bold"}>
						QUE MIDE
					</Typography>
					<Typography variant="h5">{metric}</Typography>
				</CardShadow>
			</Grid>
			<Grid item xs={12}>
				<CardShadow>
					<Typography variant="h5" fontWeight={"bold"}>
						PORCENTAJE DE RECUPERACIÓN REAL
					</Typography>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 300 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell sx={styles.rowHeader}>
										DATOS
									</TableCell>
									<TableCell
										sx={styles.rowHeader}
										align="right"
									>
										UNIDAD {}
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.length > 0 &&
									rows.map((row) => (
										<TableRow
											key={row.name}
											sx={{
												"&:last-child td, &:last-child th":
													{ border: 0 },
											}}
										>
											<TableCell
												sx={styles.rowCell}
												component="th"
												scope="row"
											>
												{row.name[0].toUpperCase() +
													row.name
														.slice(1)
														.toLowerCase()}
											</TableCell>
											<TableCell
												sx={styles.rowCell2}
												align="right"
											>
												{row.toneladas}
											</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</TableContainer>
					{/* Table */}
				</CardShadow>
			</Grid>
			<Grid
				item
				xs={12}
				style={{
					alignSelf: "flex-end",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<Button
						sx={{
							borderRadius: "10px",
							background: "#00B971",
							// background: colors.primary[500],
							paddingY: "1%",
							boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)",
							width: "100%",
							flexGrow: 1,
						}}
						onClick={handleOpenFormulaDialog}
					>
						<Typography variant="h4" color="#FFF">
							VER FÓRMULA
						</Typography>
					</Button>
					<Button
						sx={{
							borderRadius: "10px",
							background: "#00B971",
							// background: colors.primary[500],
							paddingY: "1%",
							boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)",
							width: "100%",
							flexGrow: 1,
						}}
						onClick={handleOpenSchemaDialog}
					>
						<Typography variant="h4" color="#FFF">
							ESQUEMA
						</Typography>
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
}

//Proptypes
CardPorcent.propTypes = {
	source: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	metric: PropTypes.string.isRequired,
	dats: PropTypes.array.isRequired,
	form: PropTypes.string.isRequired,
	handleOpenFormulaDialog: PropTypes.func.isRequired,
	handleCloseFormulaDialog: PropTypes.func.isRequired,
	handleOpenSchemaDialog: PropTypes.func.isRequired,
	handleCloseSchemaDialog: PropTypes.func.isRequired,
};

export default CardPorcent;
