import { createSlice } from '@reduxjs/toolkit'
import { setItem } from '../components/helper/persistence-storage'

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
		authStart: state => {
			state.isLoading = true
		},
		authSuccess: (state, action) => {
			state.user = action.payload
			setItem('fz-token', action.payload.token)
			state.isLoggedIn = true
			state.isLoading = false
		},
		authFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		authLogoutUser: state => {
			state.user = null
			state.isLoggedIn = false
		},
	},
})

export const { authStart, authSuccess, authFailure, authLogoutUser } =
	authSlice.actions

export default authSlice.reducer
