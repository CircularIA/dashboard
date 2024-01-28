import PropTypes from "prop-types";

function SuccessPopupComponent({ message }) {
	return (
		<div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center h-full w-full">
			<div
				className="animate__animated animate__fadeIn relative bg-white rounded-lg shadow-xl p-6 text-center"
				style={{ width: "400px", maxWidth: "90%" }}
			>
				<h3 className="text-2xl font-bold leading-6 mb-4">Éxito</h3>
				<p className="text-gray-500 mb-6">{message}</p>
			</div>
		</div>
	);
}

SuccessPopupComponent.propTypes = {
	message: PropTypes.string.isRequired,
};

export default SuccessPopupComponent;
