//MUI
import { Box, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
//PropTypes
import PropTypes from "prop-types";

const BorderLinearProgress = styled(LinearProgress)(() => ({
	height: 10,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: "#989898",
		borderRadius: 10,
	},
	[`& .${linearProgressClasses.bar}`]: {
		background:
			"linear-gradient( 90deg, rgba(0, 185, 113, 1),rgba(6, 217, 112, 1), rgba(13, 255, 110, 1))",
		borderRadius: 10,
	},
}));

const firstLetterUpper = (string) => {
	//Transform all to lower case and then
	//capitalize first letter
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

function IndicadorValor({ datos, setCurrentView, setCurrentIndicator, index }) {
	//True es que fue calculado
	// const color = calc ? 'linear-gradient( 90deg, rgba(0, 138, 85, 1), rgba(13, 255, 110, 1))' : '#989898';
	const color = "#989898";
	const calc = false;
	const nextView = () => {
		setCurrentIndicator(index);
		setCurrentView((e) => e + 1);
	};
	return (
		<Card
			onClick={nextView}
			sx={{
				width: "100%",
				maxWidth: "670px",
				height: "250px",
				fontSize: "1.3rem",
				borderRadius: "10px",
				border: "1px solid #989898",
				background: "#FFF",
				boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)",
			}}
		>
			<CardActionArea>
				<CardHeader
					title={datos.name}
					titleTypographyProps={{
						style: {
							fontSize: "1.1em",
							fontStyle: "normal",
							fontWeight: "700",
							lineHeight: "normal",
						},
					}}
					sx={{
						background: color,
						color: "#FFF",
						paddingY: "2",
						borderRadius: "10px 10px 0px 0px",
						textAlign: "center",
						height: "30%",
						textTransform: "uppercase",
					}}
				></CardHeader>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<Typography variant="body1" fontSize={20}>
						{firstLetterUpper(datos.description)}
					</Typography>
					<Box
						sx={{
							marginTop: "5%",
						}}
					>
						{/* <LinearProgress variant="determinate" value={50} 
                        sx = {{
                            height: '21px',
                        }}
                        /> */}
						{calc ? (
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								{/* <PieChart
                                    series = {[
                                        {
                                            arcLabel: (item) => `${item.label}: ${item.value}`,
                                            arcLabelMinAngle: 45,
                                            data,
                                        },
                                    ]}
                                    sx = {{
                                        [`& .${pieArcLabelClasses.root}`]: {
                                            fill:colors.primary[500],
                                            fontWeight: 'bold',
                                        },
                                    }}
                                    {...size}
                                >

                                </PieChart> */}
								<CircularProgress
									variant="determinate"
									value={25}
									size={65}
									sx={{
										background:
											"linear-gradient( 90deg, rgba(0, 185, 113, 1),rgba(6, 217, 112, 1), rgba(13, 255, 110, 1))",
										borderRadius: "50%",
									}}
								/>
								<Typography
									variant="h5"
									position="absolute"
									color={"#000"}
									fontWeight="bold"
								>
									25%
								</Typography>
							</Box>
						) : (
							<BorderLinearProgress
								variant="determinate"
								value={50}
								sx={{
									height: "19px",
								}}
							/>
						)}
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

//Proptypes
IndicadorValor.propTypes = {
	datos: PropTypes.object.isRequired,
	setCurrentView: PropTypes.func.isRequired,
	setCurrentIndicator: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
};

export default IndicadorValor;
