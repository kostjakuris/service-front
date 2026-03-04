import { createSlice } from '@reduxjs/toolkit'

export interface AppState {
	isNavbarOpen: boolean
	selectedLanguage: string
}

const initialState: AppState = {
	isNavbarOpen: false,
	selectedLanguage: 'en',
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setIsNavbarOpen: (state, action) => {
			state.isNavbarOpen = action.payload
		},
		setSelectedLanguage: (state, action) => {
			state.selectedLanguage = action.payload
		},
	},
})

export const { setIsNavbarOpen, setSelectedLanguage } = appSlice.actions
export default appSlice.reducer
