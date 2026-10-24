import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
	name: 'navigation',
	initialState: {
		isClientNavigation: false,
	},
	reducers: {
		setClientNavigation: (state, action) => {
			state.isClientNavigation = action.payload;
		},
	},
});

export const { setClientNavigation } = navigationSlice.actions;

export default navigationSlice.reducer;
