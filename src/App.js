import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { getItem } from './components/helper/persistence-storage'
import { Login, Main, Navbar, Register } from './components/index'
import AuthService from './service/auth'
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

	useEffect(() => {
		const token = getItem('fz-token')
		if (token) {
			getUser()
		}
	}, [])

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	)
}

export default App
