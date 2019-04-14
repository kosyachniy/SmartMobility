import React from 'react'
import 'bulma/css/bulma.css'

import './style.css'
import Header from '../Header'
import Owner from '../Owner'
import MyLoc from '../MyLoc'
import Approaching from '../Approaching';


export default class App extends React.Component {
	state = {
		owner: true,
		auth: false,
	}

	handlerType = () => {
		this.setState({
			owner: !this.state.owner,
		})

		if (this.state.owner || this.state.auth) {
			document.getElementsByClassName('header')[0].style.opacity = '0.7'
		} else {
			document.getElementsByClassName('header')[0].style.opacity = '1'
		}
	}

	handlerSubmit = () => {
		this.setState({
			auth: true,
		})

		if (this.state.owner || this.state.auth) {
			document.getElementsByClassName('header')[0].style.opacity = '0.7'
		} else {
			document.getElementsByClassName('header')[0].style.opacity = '1'
		}
	}

	render() {
		const body = (this.state.owner
			&& ((!this.state.auth && <Owner handlerSubmit={ this.handlerSubmit } />)
				|| (this.state.auth && <MyLoc />))
			)
		|| <Approaching />

		return (
			<div className="main">
				<Header handlerType={ this.handlerType } />
				{ body }
			</div>
		)
	}
}