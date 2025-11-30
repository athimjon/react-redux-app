import moment from 'moment'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ArticleService from '../service/article'
import {
	getArticleDetailFailure,
	getArticleDetailStart,
	getArticleDetailSuccess,
} from '../slice/article'

const ArticleDetail = () => {
	const { slug } = useParams()
	const dispatch = useDispatch()
	const { articleDetail, isLoading } = useSelector(state => state.article)

	useEffect(() => {
		const getArticleDetail = async () => {
			dispatch(getArticleDetailStart())
			try {
				const response = await ArticleService.getArticleDetail(slug)
				console.log(response)
				dispatch(getArticleDetailSuccess(response.article))
			} catch (error) {
				dispatch(getArticleDetailFailure())
			}
		}

		getArticleDetail()
	}, [slug])

	// ⛔ FIX: prevent "Cannot read properties of null"

	return (
		articleDetail !== null && (
			<div>
				<div className='p-5 mb-4 bg-body-tertiary rounded-3'>
					<div className='container-fluid py-5'>
						<h1 className='display-5 fw-bold'>{articleDetail.title}</h1>
						<p className='col-md-8 fs-4'>{articleDetail.description}</p>
						<p>
							<span>Created at : </span>
							{moment(articleDetail.createdAt).format('DD MMM, YYYY')}
						</p>
						<button className='btn btn-primary btn-lg' type='button'>
							{`By ${articleDetail.author.username}`}
						</button>
					</div>
				</div>
			</div>
		)
	)
}

export default ArticleDetail
