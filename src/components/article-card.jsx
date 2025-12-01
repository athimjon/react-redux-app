import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ArticleService from '../service/article'

const ArticleCard = ({ item, getArticles }) => {
	const { user, isLoggedIn } = useSelector(state => state.auth)
	const navigate = useNavigate()

	const deleteArticle = async slug => {
		try {
			await ArticleService.deleteArticle(slug)
			getArticles()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='col' key={item.id}>
			<div className='card h-100 shadow-sm'>
				<img
					src='https://www.greyboxcreative.com/wp-content/uploads/2020/01/National-Geographic-logo.jpg.webp'
					className='bd-placeholder-img card-img-top'
					alt='Product'
					style={{
						height: '225px',
						objectFit: 'cover',
						width: '100%',
					}}
				/>
				<div className='card-body'>
					<p className='card-text fw-bold m-0'>{item.title}</p>
					<p className='card-text'>{item.description}</p>
				</div>
				<div className='card-footer d-flex justify-content-between align-items-center'>
					<div className='btn-group'>
						<button
							type='button'
							className='btn btn-sm btn-outline-success'
							onClick={() => {
								navigate(`/article/${item.slug}`)
							}}
						>
							View
						</button>
						{isLoggedIn && user.username === item.author.username && (
							<>
								<button
									type='button'
									className='btn btn-sm btn-outline-primary'
									onClick={() => navigate(`/edit-article/${item.slug}`)}
								>
									Edit
								</button>
								<button
									type='button'
									className='btn btn-sm btn-outline-danger'
									onClick={() => deleteArticle(item.slug)}
								>
									Delete
								</button>
							</>
						)}
					</div>
					<small className='text-body-secondary fw-bold fst-italic text-capitalize'>
						Author{' : '}
						{item.author.username}
					</small>
				</div>
			</div>
		</div>
	)
}

export default ArticleCard
