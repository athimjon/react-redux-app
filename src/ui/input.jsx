const Input = ({ type = 'text', label, state, setState }) => {
	return (
		<div className='form-floating mt-3 '>
			<input
				type={type}
				class='form-control'
				id='floatingInput'
				placeholder={label}
				value={state}
				onChange={e => setState(e.target.value)}
				style={{ border: '1.4px solid black' }}
			/>
			<label for='floatingInput'>{label}</label>
		</div>
	)
}

export default Input
