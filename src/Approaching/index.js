import React from 'react'

import { appId, appCode } from '../keys'
import { geoLat, geoLng } from '../sets'
import './style.css'
// import Map from '../Map'
import Route from '../Route'


export default class MyLoc extends React.Component {
	// state = {
	// 	lat: null,
	// 	lng: null,
	// }

	render() {
		// window.navigator.geolocation.getCurrentPosition(
		// 	(position) => this.setState({
		// 		lat: position.coords.latitude,
		// 		lng: position.coords.longitude,
		// 	})
		// )

		return (
			<div>
				{/* <Map
					app_id={ appId }
					app_code={ appCode }
					lat={ geoLat }
					lng={ geoLng }
					zoom={ 13 }
					// markerLat={ this.state.lat }
					// marletLng={ this.state.lng }
				/> */}
				<Route
					app_id={ appId }
					app_code={ appCode }
					lat={ geoLat }
					lng={ geoLng }
					zoom={ 13 }
				/>

				<div className="call">
					<div className="field">
						<button className="button is-fullwidth" onClick={ () => {} }>Call</button>
					</div>
				</div>
			</div>
		)
	}
}