import React from 'react'


function RowInfo({info}) {
	
	return (
		<div>
			<p>Выбран пользователь <b>{`${info.firstName} ${info.lastName}`}</b></p>
			<p>Описание:</p>
			<textarea defaultValue={info.description} />
			<p>Адрес проживания: <b>{info.address.streetAddress}</b></p>
			<p>Город: <b>{info.address.city}</b></p>
			<p>Провинция/штат: <b>{info.address.state}</b></p>
			<p>Индекс: <b>{info.address.zip}</b></p>
		</div>
	)
}

export default RowInfo