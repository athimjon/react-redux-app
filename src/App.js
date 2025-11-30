import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { getItem } from './components/helper/persistence-storage'
import {
	ArticleDetail,
	Login,
	Main,
	Navbar,
	Register,
} from './components/index'
import ArticleService from './service/article'
import AuthService from './service/auth'
import { getArticesSuccess, getArticlesStart } from './slice/article'
import { authSuccess } from './slice/auth'

const App = () => {
	const dispatch = useDispatch()

	const getUser = async () => {
		try {
			const response = await AuthService.getUser()
			dispatch(authSuccess(response.user))
		} catch (error) {
			console.log(error)
		}
	}

	const getArticles = async () => {
		dispatch(getArticlesStart())
		try {
			const response = await ArticleService.getArticles()
			console.log(response)
			dispatch(getArticesSuccess(response.articles))
		} catch (error) {
			console.log(`Error fetching articles ${error}`)
		}
	}
	useEffect(() => {
		const token = getItem('fz-token')
		if (token) getUser()

		getArticles()
	}, [])

	return (
		<div>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/article/:slug' element={<ArticleDetail />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
