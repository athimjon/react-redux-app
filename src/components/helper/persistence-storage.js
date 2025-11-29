export const setItem = (key, data) => {
	try {
		localStorage.setItem(key, data)
	} catch (error) {
		console.log(`ERROR saving data to LocalStorage ${error}`)
	}
}

export const getItem = key => {
	try {
		const token = localStorage.getItem(key)
		console.log(token)
		return token
	} catch (error) {
		console.log(`ERROR getting data from LocalStorage ${error}`)
	}
}
