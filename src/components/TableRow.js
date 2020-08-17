import React from 'react'


function TableRow({rowData, setRowInfo}) {

	return (
		<tr onClick={setRowInfo.bind(null, rowData)} >
			<td>{rowData.id}</td>
			<td>{rowData.firstName}</td>
			<td>{rowData.lastName}</td>
			<td>{rowData.email}</td>
			<td>{rowData.phone}</td>
		</tr>
	)
}

export default TableRow