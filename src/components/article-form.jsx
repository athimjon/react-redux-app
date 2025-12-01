import { Input, TextArea } from '../ui'

const ArticleForm = props => {
	const { title, setTitle, description, setDescription, body, setBody } = props

	return (
		<form>
			<Input label={'Title'} state={title} setState={setTitle} />
			<TextArea
				label={'Description'}
				state={description}
				setState={setDescription}
			/>
			<TextArea
				label={'Body'}
				state={body}
				setState={setBody}
				height={'300px'}
			/>
			<button className='w-100 btn btn-lg btn-primary mt-3' type='submit'>
				Create
			</button>
		</form>
	)
}

export default ArticleForm
