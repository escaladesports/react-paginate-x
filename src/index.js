import React from 'react'
import { getPaginationModel } from 'ultimate-pagination'

class Paginate extends React.Component {
	createPagination(){
		const {
			currentPage,
			totalPages,
			boundaryPagesRange,
			breakDelimiter,
			onClick,
			link,
		} = this.props

		const paginationModel = getPaginationModel({
			currentPage,
			totalPages,
			boundaryPagesRange,
			siblingPagesRange: 2,
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
						{link(data.value)}
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
			onClick,
		} = this.props
		return (
			<ul className='PaginateX'>
				{previous &&
					<li
						className={`PaginateXPrev ${currentPage > 1 ? 'PaginateXLink' : ''}`}
						onClick={() => {
							if (currentPage > 1) {
								onClick(currentPage - 1)
							}
						}}
						>
						{previous}
					</li>
				}
				{this.createPagination()}
				{next &&
					<li
						className={`PaginateXNext ${currentPage < totalPages ? 'PaginateXLink' : ''}`}
						onClick={() => {
							if (currentPage < totalPages){
								onClick(currentPage + 1)
							}
						}}
						>
						{next}
					</li>
				}
				<style jsx global>{`
					.PaginateX{
						list-style-type: none;
						margin: 0;
						padding: 0;
						user-select: none;
					}
					.PaginateXPrev,
					.PaginateXNext,
					.PaginateXBreak,
					.PaginateXPage{
						display: inline-block;
						padding: 5px;
					}
					.PaginateXLink{
						cursor: pointer;
						text-decoration: underline;
					}
				`}</style>
			</ul>
		)
	}
}

Paginate.defaultProps = {
	previous: 'previous',
	next: 'next',
	breakDelimiter: '...',
	currentPage: 1,
	boundaryPagesRange: 2,
	link: p => p,
}

export default Paginate