import { useSelector } from 'react-redux'

const Main = () => {
	const { articles } = useSelector(state => state.article)
	return (
		<div className='container'>
			<div className='album py-5 bg-body-tertiary'>
				<div className='container'>
					<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
						{articles.map(item => (
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
										<p className='card-text fw-bold'>{item.title}</p>
										<p className='card-text'>{item.description}</p>
										<div className='d-flex justify-content-between align-items-center'>
											<div className='btn-group'>
												<button
													type='button'
													className='btn btn-sm btn-outline-success'
												>
													View
												</button>
												<button
													type='button'
													className='btn btn-sm btn-outline-primary'
												>
													Edit
												</button>
												<button
													type='button'
													className='btn btn-sm btn-outline-danger'
												>
													Delete
												</button>
											</div>
											<small className='text-body-secondary fw-bold fst-italic text-capitalize'>
												Author{' : '}
												{item.author.username}
											</small>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
