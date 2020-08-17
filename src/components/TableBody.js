import React from 'react'
import TableRow from './TableRow'


function TableBody({shownData, setRowInfo}) {
	
	const renderedData = shownData.map((item, index) => (
		<TableRow key={index} rowData={item} setRowInfo={setRowInfo}/>
	))

	return (
		<React.Fragment>
			{renderedData}
		</React.Fragment>
	)
}

export default TableBody