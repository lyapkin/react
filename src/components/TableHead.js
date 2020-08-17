import React from 'react'


function TableHead({sortData, sorted}) {

	let arrowDirection = sorted.down ? ' \u25bc' : ' \u25b2'

	return (
		<React.Fragment>
			<tr>
				<th className="colomn-id"><button className="sort" name="id" onClick={sortData} >ID{
					sorted.by === 'id' ? arrowDirection : ''
				}</button></th>
				<th><button className="sort" name="firstName" onClick={sortData} >First Name{
					sorted.by === 'firstName' ? arrowDirection : ''
				}</button></th>
				<th><button className="sort" name="lastName" onClick={sortData} >Last Name{
					sorted.by === 'lastName' ? arrowDirection : ''
				}</button></th>
				<th><button className="sort" name="email" onClick={sortData} >Email{
					sorted.by === 'email' ? arrowDirection : ''
				}</button></th>
				<th><button className="sort" name="phone" onClick={sortData} >Phone{
					sorted.by === 'phone' ? arrowDirection : ''
				}</button></th>
			</tr>
		</React.Fragment>
	)
}

export default TableHead