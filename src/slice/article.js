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
		getArticleDetailFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload || 'Failed to load article'
			state.articleDetail = null
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
