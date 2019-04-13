import React from 'react'
import 'bulma/css/bulma.css'

import { appId, appCode } from '../keys'
import { geoLat, geoLng } from '../sets'
import './style.css'
import Header from '../Header'
import Owner from '../Owner'
// import MyLoc from '../MyLoc'
import Map from '../Map'


export default class Main extends React.Component {
	state = {
		owner: true,
		auth: false,
	}

	handlerType = () => {
		this.setState({
			owner: !this.state.owner,
		})

		if (this.state.owner) {
			document.getElementsByClassName('header')[0].style.opacity = '0.7'
		} else {
			document.getElementsByClassName('header')[0].style.opacity = '1'
		}
	}

	render() {
		const body = (this.state.owner && (!this.state.auth && <Owner />)) || (<Map
			app_id={ appId }
			app_code={ appCode }
			lat={ geoLat }
			lng={ geoLng }
			zoom={ 13 }
		/>)

		// || (this.state.auth && <MyLoc />)

		return (
			<div className="main">
				<Header handlerType={ this.handlerType } />
				{ body }
			</div>
		)
	}
}