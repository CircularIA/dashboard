import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	// * Por defecto se mostrará la sucursal 0 y el departamento 0 (es decir iniciales)
	branch: {
		_id: "0",
		index: 0,
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
		setDepartament: (state, action) => {
			state.departament = action.payload;
		},
	},
});

export const { setBranch, setDepartament } = userSlice.actions;

export default userSlice.reducer;
