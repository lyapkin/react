import React, {useState} from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import Pagination from './Pagination'


function Table({shownData, sortData, sorted, setRowInfo}) {
	const [rowsPerPage, setRowsPerPage] = useState(10)
	const [page, setPage] = useState(1)

	const lastRow = rowsPerPage * page
	const firstRow = lastRow - rowsPerPage
	const pagesAmount = Math.ceil(shownData.length / rowsPerPage)

	return (
		<div className="table">
			<table>
				<thead>
					<TableHead
						sortData={sortData}
						sorted={sorted}
					/>
				</thead>
				<tbody>
					<TableBody
						shownData={shownData.slice(firstRow, lastRow)}
						setRowInfo={setRowInfo}
					/>
				</tbody>
			</table>
			<Pagination 
				pagesAmount={pagesAmount}
				setPage={setPage}
				page={page}
			/>
			<select
				value={rowsPerPage}
				onChange={event => {
									setRowsPerPage(event.target.value)
									setPage(1)
								   }
						 }
			>
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="50">50</option>
			</select>
		</div>
	)
}

export default Table