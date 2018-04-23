import React from 'react'
import { getPaginationModel } from 'ultimate-pagination'

class Paginate extends React.Component {
	createPagination(){
		const {
			currentPage,
			totalPages,
			boundaryPagesRange,
			siblingPagesRange,
			breakDelimiter,
			onClick,
			link,
		} = this.props

		const paginationModel = getPaginationModel({
			currentPage,
			totalPages,
			boundaryPagesRange,
			siblingPagesRange,
			hidePreviousAndNextPageLinks: true,
			hideFirstAndLastPageLinks: true,
		})

		return paginationModel.map((data, key) => {
			if(data.type === 'PAGE'){
				return (
					<li
						onClick={() => onClick(data.value)}
						className={`PaginateXPage ${data.isActive ? 'PaginateXCurrent' : 'PaginateXLink'}`}
						key={`PaginateX${data.key}`}
						>
						{link(data.value, data.value)}
					</li>
				)
			}
			return (
				<li
					className='PaginateXBreak'
					key={`PaginateX${data.key}`}
					>
					{breakDelimiter}
				</li>
			)
		})
	}
	render() {
		const {
			currentPage,
			totalPages,
			previous,
			next,
			first,
			last,
			onClick,
			link,
			hideInactive,
		} = this.props
		const isFirst = currentPage === 1
		const isLast = currentPage === totalPages
		return (
			<ul className='PaginateX'>
				{first && (!hideInactive || !isFirst) &&
					<li
						className={`PaginateXFirst ${isFirst ? '' : 'PaginateXLink'}`}
						onClick={() => {
							if (!isFirst) {
								onClick(1)
							}
						}}
						>
						{link(1, first)}
					</li>
				}
				{previous && (!hideInactive || !isFirst) &&
					<li
						className={`PaginateXPrev ${isFirst ? '' : 'PaginateXLink'}`}
						onClick={() => {
							if (!isFirst) {
								onClick(currentPage - 1)
							}
						}}
						>
						{link(currentPage - 1, previous)}
					</li>
				}
				{this.createPagination()}
				{next && (!hideInactive || !isLast) &&
					<li
						className={`PaginateXNext ${isLast ? '' : 'PaginateXLink'}`}
						onClick={() => {
							if (!isLast){
								onClick(currentPage + 1)
							}
						}}
						>
						{link(currentPage + 1, next)}
					</li>
				}
				{last && (!hideInactive || !isLast) &&
					<li
						className={`PaginateXLast ${isLast ? '' : 'PaginateXLink'}`}
						onClick={() => {
							if (!isLast) {
								onClick(totalPages)
							}
						}}
						>
						{link(totalPages, last)}
					</li>
				}
				<style jsx global>{`
					.PaginateX{
						list-style-type: none;
						margin: 0;
						padding: 0;
						user-select: none;
						li{
							display: inline-block;
							padding: 5px;
						}
					}
					.PaginateXLink{
						cursor: pointer;
					}
				`}</style>
			</ul>
		)
	}
}

Paginate.defaultProps = {
	previous: 'previous',
	next: 'next',
	first: false,
	last: false,
	breakDelimiter: '...',
	currentPage: 1,
	boundaryPagesRange: 2,
	siblingPagesRange: 2,
	hideInactive: false,
	link: (n, t) => t,
}

export default Paginate