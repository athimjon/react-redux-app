import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { icon } from '../constants'
import AuthService from '../service/auth'
import { authFailure, authStart, authSuccess } from '../slice/auth'
import { Input } from '../ui'
import { ValidationError } from './'

const Register = () => {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [email, seteEmail] = useState('')
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const { isLoading, isLoggedIn } = useSelector(state => state.auth)

	const registerHandler = async e => {
		e.preventDefault()
		dispatch(authStart())
		const user = { username: name, password, email }

		try {
			const response = await AuthService.userRegister(user)
			dispatch(authSuccess(response.user))
			navigate('/')
		} catch (error) {
			dispatch(authFailure(error.response.data.errors))
		}
	}

	useEffect(() => {
		if (isLoggedIn) navigate('/')
	}, [])

	return (
		<div className='text-center'>
			<main className='form-signin w-25 m-auto'>
				<form>
					<img
						className='mb-4'
						src={icon}
						alt=''
						width='75'
						height={'70'}
						style={{ borderRadius: '12px' }}
					/>
					<h1 className='h3 mb-3 fw-normal'>Create your account</h1>
					<p className='mb-4'>
						Welcome! Please fill in the details to get started.
					</p>
					<ValidationError />
					<Input label={'Username'} state={name} setState={setName} />
					<Input
						type={'email'}
						label={'Email address'}
						state={email}
						setState={seteEmail}
					/>
					<Input
						type={'password'}
						label={'Password'}
						state={password}
						setState={setPassword}
					/>

					<button
						disabled={isLoading}
						onClick={registerHandler}
						className='btn btn-primary w-100 py-2 mt-3'
						type='submit'
					>
						{isLoading ? 'Loading...' : 'Sign Up'}
					</button>
				</form>
			</main>
		</div>
	)
}
export default Register
