import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './slice'

const userReducer = combineReducers({
	app: appReducer,
})
export const setupStore = () => {
	return configureStore({
		reducer: userReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	})
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
