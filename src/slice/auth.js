import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	isLoggedIn: false,
	user: null,
	error: null,
}
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// LOGIN
		loginUserStart: state => {
			state.isLoading = true
		},
		loginUserSuccess: state => {},
		loginUserFailure: state => {},

		// REGISTER
		registerUserStart: state => {
			state.isLoading = true
		},
		registerUserSuccess: state => {
			state.isLoggedIn = true
			state.isLoading = false
		},
		registerUserFailure: state => {
			state.isLoading = false
			state.error = 'errorE'
		},
	},
})

export const {
	loginUserStart,
	registerUserStart,
	registerUserSuccess,
	registerUserFailure,
} = authSlice.actions

export default authSlice.reducer
