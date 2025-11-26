import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Main, Register } from './components/index'

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
