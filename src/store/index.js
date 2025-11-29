import { configureStore } from '@reduxjs/toolkit'
import ArticeReducer from '../slice/article'
import AuthReducer from '../slice/auth'

export default configureStore({
	reducer: {
		auth: AuthReducer,
		article: ArticeReducer,
	},

	devTools: process.env.NODE_ENV !== 'production',
})
