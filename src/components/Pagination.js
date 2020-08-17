import React from 'react'


function Pagination({pagesAmount, setPage, page}) {
	const pages = []

	for (let i = 1; i <= pagesAmount; i++) {
		pages.push(i)
	}

	const firstIndex = (page - 2) <= 1 ? 0 : page - 3
	const lastIndex = (page + 2) >= pages[pages.length - 1] ? undefined : page + 2

	const renderedPages = pages.slice(firstIndex, lastIndex).map(item => (
		<li key={item} onClick={setPage.bind(null, item)} >

			<a href="#" className={item === page ? 'active-page' : null}>{item}</a>

		</li>
	))

	const ellipsis = <li>...</li>
	const firstPage = (
		<li key={0} onClick={setPage.bind(null, 1)} >
			<a href="#">Первая</a>
		</li>
	)
	const lastPage = (
		<li key={pages.length} onClick={setPage.bind(null, pages[pages.length - 1])} >
			<a href="#">Последняя</a>
		</li>
	)

	return (
		<ul>
			{(page === 1) ? null : firstPage}
			{(firstIndex > 0) ? ellipsis : null}
			{renderedPages}
			{(lastIndex < pages[pages.length - 1]) ? ellipsis : null}
			{(page === pages.length) ? null : lastPage}
		</ul>
	)
}

export default Pagination