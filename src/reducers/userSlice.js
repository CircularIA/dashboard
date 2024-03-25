import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	// * Por defecto se mostrará la sucursal 0 y el departamento 0 (es decir iniciales)
	branch: {
		_id: "0",
		index: 0,
	},
	company: {
		_id: "1",
		index: 1,
	},
	departament: 0,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setBranch: (state, action) => {
			console.log("cambiar sucursal");
			console.log(action.payload);
			console.log(state.branch);
			state.branch._id = action.payload._id;
			state.branch.index = action.payload.index;
		},
		setCompany: (state, action) => {
			state.company._id = action.payload._id;
			state.company.index = action.payload.index;
		},
		setDepartament: (state, action) => {
			state.departament = action.payload;
		},
	},
});

export const { setBranch, setDepartament, setCompany } = userSlice.actions;

export default userSlice.reducer;
