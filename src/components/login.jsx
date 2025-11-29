import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { icon } from '../constants'
import AuthService from '../service/auth'
import { ValidationError } from './'

import { authFailure, authStart, authSuccess } from '../slice/auth'
import { Input } from '../ui'

const Login = () => {
	const [password, setPassword] = useState('')
	const [email, seteEmail] = useState('')

	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)

	const loginHandler = async e => {
		e.preventDefault()
		dispatch(authStart())
		const user = { email, password }

		try {
			const response = await AuthService.userLogin(user)
			dispatch(authSuccess(response.user))
		} catch (error) {
			dispatch(authFailure(error.response.data.errors))
		}
	}

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
					<h1 className='h3 mb-3 fw-normal'>Sign in to Foodz </h1>
					<p className='mb-4'>Welcome back! Please sign in to continue</p>
					<ValidationError />
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
						onClick={loginHandler}
						disabled={isLoading}
						className='btn btn-primary w-100 py-2 mt-3'
						type='submit'
					>
						{isLoading ? 'Loading...' : 'Sign In'}
					</button>
				</form>
			</main>
		</div>
	)
}

export default Login
