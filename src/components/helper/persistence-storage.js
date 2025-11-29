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
		return token
	} catch (error) {
		console.log(`ERROR getting data from LocalStorage ${error}`)
	}
}

export const removeItem = key => {
	try {
		localStorage.removeItem(key)
	} catch (error) {
		console.log(`ERROR removing data from LocalStorage ${error}`)
	}
}
