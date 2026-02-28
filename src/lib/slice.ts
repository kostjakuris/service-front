import { createSlice } from '@reduxjs/toolkit'

export interface AppState {
	isNavbarOpen: boolean
}

const initialState: AppState = {
	isNavbarOpen: false,
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setIsNavbarOpen: (state, action) => {
			state.isNavbarOpen = action.payload
		},
	},
})

export const { setIsNavbarOpen } = appSlice.actions
export default appSlice.reducer
