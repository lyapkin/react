import React from 'react'


function GetData({getData}) {

	return (
		<div className="get-data">
			<span>Выбирите набор данных: </span>
			<button name="smallset" onClick={getData}>Маленький</button>
			<button name="bigset" onClick={getData}>Большой</button>
		</div>
	)
}

export default GetData