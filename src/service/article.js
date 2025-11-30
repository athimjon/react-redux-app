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
}
export default ArticleService
