import React, {useState} from 'react'

const initInputs = {
	firstName: '',
	lastName: '',
	email: '',
	phone: ''
}

function editPhone(number) {
	number = number.split('')
	number.splice(0, 0, '(')
	number.splice(4, 0, ')')
   	number.splice(8, 0, '-')
	return number.join('')
}

function AddRow({addRow}) {
	const [inputs, setInputs] = useState(initInputs)
	const [diasabledAddBtn, setDiasabledAddBtn] = useState(true)
	const [hiddenForm, setHiddenForm] = useState(true)

	const changeInput = (event) => {
		event.persist()

		setInputs(prevState => {
			const newState = {...prevState}
			newState[event.target.name] = event.target.value
			if (Object.values(newState).every(item => item.length > 0)) {
				setDiasabledAddBtn(false)
			} else {
				setDiasabledAddBtn(true)
			}
			return newState
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = inputs

		data.phone = editPhone(data.phone)

		addRow(data)

		setInputs(initInputs)
		setDiasabledAddBtn(true)
		setHiddenForm(true)
	}

	return (
		<div>
			<button onClick={() => setHiddenForm(false)} className="add-row-button" >Добавить</button>
			<div  hidden={hiddenForm} className="add-row-container">	
				<form onSubmit={handleSubmit} className="add-row-form">
					<label>
						Имя: <input type="text" name="firstName" value={inputs.firstName} onChange={changeInput} />
					</label>
					<label>
						Фамилия: <input type="text" name="lastName" value={inputs.lastName} onChange={changeInput} />
					</label>
					<label>
						Email: <input type="email" name="email" value={inputs.email} onChange={changeInput} />
					</label>
					<label>
						Телефон: <input type="tel" name="phone" value={inputs.phone} onChange={changeInput} placeholder="(012)345-6789" maxLength="10" minLength="10" />
					</label>
					<button type="submit" disabled={diasabledAddBtn} >Добавить запись</button>
				</form>
				<button onClick={() => setHiddenForm(true)} >Закрыть</button>
			</div>
		</div>
	)
}

export default AddRow