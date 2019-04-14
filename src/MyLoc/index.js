import React from 'react'

import { appId, appCode } from '../keys'
import { geoLat, geoLng } from '../sets'
import './style.css'
import Map from '../Map'


export default class MyLoc extends React.Component {
	render() {
		return (
			<div>
				<Map
					app_id={ appId }
					app_code={ appCode }
					lat={ geoLat }
					lng={ geoLng }
					zoom={ 13 }
				/>

				<div className="order">
					<div className="field">
						<button className="button is-primary is-fullwidth" onClick={ () => {} }>Order</button>
					</div>
				</div>
			</div>
		)
	}
}