import { useEffect, useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

import PropTypes from "prop-types";
//Form components
import Button from "@mui/material/Button";
//Components
import Loading from "../../components/Loading";
import { styled } from "@mui/material/styles";
//Redux
import { useSelector } from "react-redux";
import DialogEditBranch from "./components/dialogEditBranch";
import DialogAddBranch from "./components/dialogAddBranch";

const StyledButton = styled(Button)(() => ({
	background:
		"linear-gradient(90deg, #008A55 0%, #06BD60 50.52%, #0DFF6E 100%)",
	borderRadius: "12px",
	color: "#ffff",
	padding: "0px 5% 0px 5%",
}));

const getSelectedBranch = (branches, idBranch) => {
	const branchSelected = branches.find((branch) => branch._id === idBranch);
	return branchSelected;
};

function Basic({ companyInfo }) {
	console.log(companyInfo);
	const [open, setOpen] = useState(false);
	const [openAdd, setOpenAdd] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClickOpenAdd = () => {
		setOpenAdd(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleCloseAdd = () => {
		setOpenAdd(false);
	};
	//Redux
	const currentBranch = useSelector((state) => state.user.branch);
	const [idBranch, setIdBranch] = useState(currentBranch._id);

	//Set a loading variable to change to true when the data is loaded
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (
			Object.keys(companyInfo).length > 0 &&
			companyInfo.companies.branches.length > 0
		) {
			setLoading(false);
		}
	}, [companyInfo]);

	return (
		<section>
			{loading ? (
				<Loading />
			) : (
				<>
					<section className="flex flex-wrap box-border w-full h-full py-8">
						<article className="flex flex-col justify-between items-center content-between w-full sm:w-4/12 p-3 ">
							<h2 className="text-3xl font-bold uppercase">
								{companyInfo.companies.name}
							</h2>
							<CameraAltRoundedIcon
								sx={{
									color: "#000",
									fontSize: 50,
									borderRadius: "50%",
									background: "rgba(217, 217, 217, 1)",
								}}
							/>
							<StyledButton
								component="label"
								variant="contained"
								size="large"
								sx={{ width: "170px", height: "50px" }}
							>
								Cargar Imagen
								<input type="file" hidden />
							</StyledButton>
						</article>
						<section className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4 gap-y-24 p-3 w-full sm:w-8/12 ">
							<TextField
								label="Nombre de la empresa"
								size="small"
								multiline
								value={companyInfo.companies.name}
							/>
							<TextField
								label="Sector / Industria"
								size="small"
								multiline
								value={companyInfo.companies.typeIndustry}
							/>
							<TextField
								label="Telefono"
								size="small"
								multiline
								value={companyInfo.companies.phone}
							/>
							<TextField
								label="Tamaño de la empresa"
								size="small"
								multiline
								value={companyInfo.companies.size}
							/>
							<TextField
								label="Region"
								size="small"
								multiline
								value={companyInfo.companies.region}
							/>
							<TextField
								label="Ubicacion"
								size="small"
								multiline
								value={companyInfo.companies.address}
							/>
							<TextField
								label="Sucursal"
								select
								size="small"
								multiline
								value={idBranch}
								onChange={(e) => {
									setIdBranch(e.target.value);
								}}
							>
								{companyInfo.companies.branches.map(
									(branch, index) => {
										return (
											<MenuItem
												key={index}
												value={branch._id}
											>
												{branch.name}
											</MenuItem>
										);
									}
								)}
							</TextField>
							<div className="flex justify-between gap-2">
								{/* Botons */}
								<StyledButton
									onClick={handleClickOpen}
									variant="contained"
									size="large"
									sx={{
										width: "100%",
										maxWidth: "351px",
										height: "42px",
									}}
								>
									Editar Sucursal
								</StyledButton>
								<StyledButton
									onClick={handleClickOpenAdd}
									variant="contained"
									size="large"
									sx={{
										width: "100%",
										maxWidth: "351px",
										height: "42px",
									}}
								>
									Agregar Sucursal
								</StyledButton>
							</div>
						</section>
					</section>
					<DialogEditBranch
						open={open}
						handleClose={handleClose}
						selectedBranch={getSelectedBranch(
							companyInfo.companies.branches,
							idBranch
						)}
					/>
					<DialogAddBranch
						open={openAdd}
						handleClose={handleCloseAdd}
					/>
				</>
			)}
		</section>
	);
}
//Define the proptypes
Basic.propTypes = {
	companyInfo: PropTypes.object.isRequired,
};
Basic.defaultProps = {
	companyInfo: {},
};
export default Basic;
