import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArticleService from '../service/article'
import { getArticesSuccess, getArticlesStart } from '../slice/article'
import { Loader } from '../ui/index'
import ArticleCard from './article-card'
const Main = () => {
	const dispatch = useDispatch()
	const { articles, isLoading } = useSelector(state => state.article)

	const getArticles = async () => {
		dispatch(getArticlesStart())
		try {
			const response = await ArticleService.getArticles()
			dispatch(getArticesSuccess(response.articles))
		} catch (error) {
			console.log(`Error fetching articles ${error}`)
		}
	}

	useEffect(() => {
		getArticles()
	}, [])

	return isLoading ? (
		<Loader />
	) : (
		<>
			<div className='album py-5 bg-body-tertiary'>
				<div>
					<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
						{articles.map(item => (
							<ArticleCard item={item} getArticles={getArticles} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Main
