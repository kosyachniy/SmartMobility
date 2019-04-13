import React from 'react'

import './style.css'


export default class Owner extends React.Component {
	render() {
		return (
			<div class="field">
				<div class="control">
					<input class="input is-primary is-medium" type="text" placeholder="Where are your home?" />
				</div>
				<div class="control">
					<input class="input is-primary is-medium" type="text" placeholder="Phone" />
				</div>
				<div class="control">
					<input class="input is-primary is-medium" type="text" placeholder="Card number" />
				</div>
			</div>
		)
	}
}