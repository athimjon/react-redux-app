import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logo } from '../constants'
import { authLogoutUser } from '../slice/auth'
import { removeItem } from './helper/persistence-storage'

const Navbar = () => {
	const { isLoggedIn, user } = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logoutHandler = () => {
		dispatch(authLogoutUser())
		removeItem('fz-token')
		navigate('/login')
	}
	return (
		<div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3'>
			<Link to={'/'}>
				<img
					width={'135px'}
					height={'73px'}
					style={{ borderRadius: '8px' }}
					src={logo}
					alt='Logo not Found!'
				/>
			</Link>

			<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
				{isLoggedIn ? (
					<>
						<p className='me-3 py-2 m-0 text-dark text-decoration-none fw-bold fst-italic'>
							{user.email}
						</p>
						<button className='btn btn-outline-danger' onClick={logoutHandler}>
							Log Out
						</button>
					</>
				) : (
					<>
						<Link
							to={'/register'}
							className='me-3 py-2 link-body-emphasis text-decoration-none'
						>
							Sign up
						</Link>
						<Link
							to={'/login'}
							className='me-3 py-2 link-body-emphasis text-decoration-none'
						>
							Login
						</Link>
					</>
				)}
			</nav>
		</div>
	)
}

export default Navbar
