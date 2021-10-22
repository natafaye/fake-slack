import React, { Component } from 'react'
import Channel from './components/Channel'
import Sidebar from './components/Sidebar'

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<Sidebar />
					<Channel />
				</div>
			</div>
		)
	}
}