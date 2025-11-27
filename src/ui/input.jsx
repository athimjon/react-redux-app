import { v4 as uuid } from 'uuid'

const Input = ({ type = 'text', label, state, setState }) => {
	const id = uuid()

	return (
		<div className='form-floating mt-3 '>
			<input
				type={type}
				className='form-control'
				id={id}
				placeholder={label}
				value={state}
				onChange={e => setState(e.target.value)}
				style={{ border: '1.4px solid black' }}
			/>
			<label htmlFor='floatingInput'>{label}</label>
		</div>
	)
}

export default Input
