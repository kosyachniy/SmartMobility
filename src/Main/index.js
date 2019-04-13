import React from 'react'
import 'bulma/css/bulma.css'

import { appId, appCode, geoLat, geoLng } from '../keys'
import './style.css'
import Owner from '../Owner'
import Map from '../Map'


export default class Main extends React.Component {
	state = {
		owner: true
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
		const body = (this.state.owner && <Owner />) || (<Map
			app_id={ appId }
			app_code={ appCode }
			lat={ geoLat }
			lng={ geoLng }
			zoom={ 13 }
		/>)
		return (
			<div className="main">
				<div className="header">
					<div className="trig">
						Owner
						<label className="switch">
							<input type="checkbox" onChange={ this.handlerType } />
							<span className="slider round"></span>
						</label>
						Driver
					</div>
				</div>
	
				{ body }
			</div>
		)
	}
}