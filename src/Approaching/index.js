import React from 'react'

import { appId, appCode } from '../keys'
import { geoLat, geoLng } from '../sets'
import Map from '../Map'


export default class Approaching extends React.Component {
	render() {
		return (
			<Map
				app_id={ appId }
				app_code={ appCode }
				lat={ geoLat }
				lng={ geoLng }
				zoom={ 13 }
			/>
		)
	}
}