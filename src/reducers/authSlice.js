import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  branch: 0,
  departament: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setBranch: (state, action) => {
      state.branch = action.payload;
    },
    setDepartament: (state, action) => {
      state.departament = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
