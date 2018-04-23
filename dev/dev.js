import React from 'react'
import { render } from 'react-dom'
import Paginate from '../src'

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

class Test extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			page: 1
		}
	}
	render(){
		return (
			<Paginate
				currentPage={this.state.page}
				totalPages={50}
				onClick={page => this.setState({ page })}
			/>
		)
	}
}

render(
	<Test />,
	containerEl
)