import {
	ServerProblemError,
	ResponseError
} from './errors'


export async function requestData(dataSize) {
	const url = (dataSize === 'smallset') ? 
        'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}' : 
        'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    try {
    	const response = await fetch(url)

    	if (!response.ok) {
    		throw new ServerProblemError('Проблемы с сервером. Попробуйте сделать запрос позже.')
    	}

    	const data = await response.json()

    	return data
    } catch (err) {
    	if (err instanceof ServerProblemError || err instanceof SyntaxError) {
    		throw new ResponseError(err)
    	} else {
    		throw err
    	}
    }
}