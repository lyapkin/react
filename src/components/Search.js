import React, {useState} from 'react'


function Search({setSearchRequest}) {
	const [searchValue, setSearchValue] = useState('')

	const handleSearch = () => {
		setSearchRequest(searchValue.trim().toLowerCase())

		setSearchValue('')
	}

	return (
		<div className="search">
			<input type='text' onChange={event => setSearchValue(event.target.value)} value={searchValue} />
			<button onClick={handleSearch} >Найти</button>
		</div>
	)
}

export default Search