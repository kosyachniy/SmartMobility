import React from 'react'

import './style.css'


export default class Owner extends React.Component {
	render() {
		return (
			<div className="field">
				<div className="control">
					<input className="input is-primary is-medium" type="text" placeholder="Where are your home?" />
				</div>
				<div className="control">
					<input className="input is-primary is-medium" type="text" placeholder="Phone" />
				</div>
				<div className="control">
					<input className="input is-primary is-medium" type="text" placeholder="Card number" />
				</div>
			</div>
		)
	}
}