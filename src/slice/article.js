import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	articles: [],
	articleDetail: null,
	error: null,
}
export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		getArticlesStart: state => {
			state.isLoading = true
		},

		getArticesSuccess: (state, action) => {
			state.isLoading = false
			state.articles = action.payload
		},
		getArticlesFailure: (state, action) => {
			state.error = action.payload
			state.isLoading = false
		},
		getArticleDetailStart: state => {
			state.isLoading = true
		},

		getArticleDetailSuccess: (state, action) => {
			state.isLoading = false
			state.articleDetail = action.payload
		},
		getArticleDetailFailure: state => {
			state.isLoading = false
		},
	},
})

export default articleSlice.reducer
export const {
	getArticesSuccess,
	getArticlesStart,
	getArticlesFailure,
	getArticleDetailStart,
	getArticleDetailSuccess,
	getArticleDetailFailure,
} = articleSlice.actions
