import axios from './api'
const ArticleService = {
	async getArticles() {
		const { data } = await axios.get('/articles')
		return data
	},
	async getArticleDetail(slug) {
		const response = await axios.get(`/articles/${slug}`)
		console.log(`API DETAIL : ${response}`)
		return response.data
	},
	async postArticle(article) {
		const { data } = await axios.post(`/articles`, { article })
		return data
	},

	async deleteArticle(slug) {
		console.log('DELETE ID : ', slug)
		await axios.delete(`/articles/${slug}`)
	},
}
export default ArticleService
