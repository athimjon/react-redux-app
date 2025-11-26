import { useState } from 'react'
import { icon } from '../constants'
import { Input } from '../ui'

const Login = () => {
	const [password, setPassword] = useState('')
	const [email, seteEmail] = useState('')

	return (
		<div className='text-center'>
			<main class='form-signin w-25 m-auto'>
				<form>
					<img
						class='mb-4'
						src={icon}
						alt=''
						width='75'
						height={'70'}
						style={{ borderRadius: '12px' }}
					/>
					<h1 class='h3 mb-3 fw-normal'>Sign in to Sammi</h1>
					<p className='mb-4'>Welcome back! Please sign in to continue</p>
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
					<button class='btn btn-primary w-100 py-2 mt-3' type='submit'>
						Sign In
					</button>
				</form>
			</main>
		</div>
	)
}

export default Login
