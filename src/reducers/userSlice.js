import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // * Por defecto se mostrará la sucursal 0 y el departamento 0 (es decir iniciales)
    branch: 0,
    departament: 0,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBranch: (state, action) => {
            state.branch = action.payload;
        },
        setDepartament: (state, action) => {
            state.departament = action.payload;
        },
    },
});

export const { setBranch, setDepartament } = userSlice.actions;

export default userSlice.reducer;