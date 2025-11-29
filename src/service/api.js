import axios from 'axios'
import { getItem } from '../components/helper/persistence-storage'
axios.defaults.baseURL = 'http://localhost:3000/api'

axios.interceptors.request.use(config => {
	const token = getItem('fz-token')
	if (token) {
		config.headers.Authorization = `Token ${token}`
	}
	return config
})

export default axios
